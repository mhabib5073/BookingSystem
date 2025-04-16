from rest_framework import serializers
from services.models import Service
from .models import Booking
from services.serializers import ServiceSerializer

class BookingSerializer(serializers.ModelSerializer):
    service = ServiceSerializer(read_only=True)
    service_id = serializers.PrimaryKeyRelatedField(
        queryset=Service.objects.all(), 
        source='service', write_only=True
        )
    
    class Meta:
        model = Booking
        fields = ['id', 'user', 'service', 'service_id', 'booking_date', 'status', 'created_at']
