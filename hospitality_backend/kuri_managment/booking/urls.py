from django.urls import path
from .views import BookingListCreateView , booking_form , rooms_list

urlpatterns = [
    path('make_bookings/', BookingListCreateView.as_view(), name='booking-list-create'),
    path('booking_form/', booking_form , name='booking-form-create'),
    path('rooms/' , rooms_list , name = "room_list") 
]
