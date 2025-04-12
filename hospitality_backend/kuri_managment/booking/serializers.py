from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ['user', 'total_price', 'status', 'payment_status', 'created_at', 'updated_at']

    def validate(self, data):
        check_in = data.get('check_in')
        check_out = data.get('check_out')
        room = data.get('room')

        if check_out <= check_in:
            raise serializers.ValidationError("Check-out must be after check-in.")

        overlapping = Booking.objects.filter(
            room=room,
            check_in__lt=check_out,
            check_out__gt=check_in
        )

        if self.instance:
            overlapping = overlapping.exclude(id=self.instance.id)

        if overlapping.exists():
            raise serializers.ValidationError("This room is already booked for the selected dates.")

        return data

    def create(self, validated_data):
        user = self.context['request'].user
        booking = Booking(**validated_data)
        booking.user = user
        booking.total_price = booking.calculate_total_price()
        booking.save()
        return booking
# serializers.py
from rest_framework import serializers
from .models import Room, Feature  # adjust imports if your model names differ

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ('id', 'name')

class RoomSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True, read_only=True)  # assumes a ManyToManyField

    class Meta:
        model = Room
        fields = '__all__'
