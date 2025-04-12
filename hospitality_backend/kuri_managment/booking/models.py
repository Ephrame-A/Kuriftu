from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError

class Feature(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Resorts(models.Model):
    name = models.CharField(max_length= 225)
    def __str__(self):
        return self.name

class Room(models.Model):
    id = models.AutoField(primary_key=True)
    resort = models.ForeignKey('Resorts', on_delete=models.CASCADE, related_name='resort_name')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.PositiveIntegerField(default=1)
    features = models.ManyToManyField(Feature, blank=True)

    def __str__(self):
        return self.name

    def clean(self):
        super().clean()
        # Only check features count if the instance has been saved
        if self.pk and self.features.count() > 8:
            raise ValidationError("A room can have at most 8 features.")


class Booking(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    ]

    PAYMENT_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('refunded', 'Refunded'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='bookings')
    check_in = models.DateField()
    check_out = models.DateField()
    guests = models.PositiveIntegerField(default=1)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS_CHOICES, default='pending')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    message = models.TextField(blank=True, null=True, help_text="Special requests or notes")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Booking by {self.user.username} for {self.room} from {self.check_in} to {self.check_out}"

    def duration(self):
        return (self.check_out - self.check_in).days

    def calculate_total_price(self):
        return self.duration() * self.room.price_per_night

    def clean(self):
        overlapping_bookings = Booking.objects.filter(
            room=self.room,
            check_in__lt=self.check_out,
            check_out__gt=self.check_in,
        ).exclude(id=self.id)

        if overlapping_bookings.exists():
            raise ValidationError("This room is already booked for the selected dates.")

        if self.check_out <= self.check_in:
            raise ValidationError("Check-out date must be after check-in date.")

    def save(self, *args, **kwargs):
        self.total_price = self.calculate_total_price()
        self.full_clean() 
        super().save(*args, **kwargs)
