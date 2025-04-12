from rest_framework import generics, permissions
from .models import Booking
from .serializers import BookingSerializer , RoomSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Room

class BookingListCreateView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

@api_view(['GET'])
def rooms_list(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['GET' , 'POST'])
def booking_form(request):
    if request.method == 'POST':
        data = request.data
        serializer = BookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    return Response({"message": "Please send a POST request with booking data"}, status=200)