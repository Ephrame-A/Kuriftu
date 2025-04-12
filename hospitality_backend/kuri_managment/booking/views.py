from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Booking, Room
from .serializers import BookingSerializer, RoomSerializer

class BookingListCreateView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = []  # For production, add appropriate authentication here

    def get_queryset(self):
        return Booking.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

@api_view(['GET'])
def rooms_list(request):
    resort_id = request.GET.get('resort')
    rooms = Room.objects.all()
    if resort_id:
        rooms = rooms.filter(resort_id=resort_id)
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def booking_form(request):
    if request.method == 'POST':
        data = request.data
        print(data)
        serializer = BookingSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    return Response({"message": "Please send a POST request with booking data"}, status=200)
