from django.shortcuts import render
from rest_framework import viewsets
from django import views
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from .serializers import ServiceSerializer
from .models import Service



class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [IsAuthenticated, IsAdminUser]
        else:
            permission_classes = []
        return [permission() for permission in permission_classes]