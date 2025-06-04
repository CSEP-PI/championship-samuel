from django.shortcuts import render
from .models import Jogador
from championship.serializers import JogadorSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

# Create your views here.

class JogadorViewSet(ModelViewSet):
    queryset = Jogador.objects.all()
    serializer_class = JogadorSerializer
