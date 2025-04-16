from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Booking
from .serializers import BookingSerializer
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status


class BookingViewSet(viewsets.ModelViewSet):    
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Booking.objects.all()
        return Booking.objects.filter(user=user)

    def perform_create(self, serializer):
        booking = serializer.save(user=self.request.user)
        print(f"Email sent: Booking {booking.id} confirmed for {booking.user.email}")