from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from championship.serializers import TimeSerializer, EstadioSerializer, EnderecoSerializer
from .models import Time, Estadio
from address.models import Endereco

# Create your views here.

class TimeViewSet(ModelViewSet):
    queryset = Time.objects.all()
    serializer_class = TimeSerializer
    
class EstadioViewSet(ModelViewSet):
    queryset = Estadio.objects.all()
    serializer_class = EstadioSerializer

class EnderecoViewSet(ModelViewSet):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
    
