from tabnanny import verbose
from django.db import models
from address.models import Endereco
from players.models import Jogador

# Create your models here.
class Time(models.Model):
    nome = models.CharField(verbose_name='Nome do time',max_length=200, blank=False, null=False)
    capitao = models.ForeignKey(Jogador, on_delete=models.CASCADE, related_name='times', blank=True, null=True)
    
    class Meta:
        verbose_name = 'Time'
        verbose_name_plural = 'Times'
        db_table = 'time'
    
    def __str__(self):
        return self.nome
    
class Estadio(models.Model):
    nome = models.CharField(verbose_name='Nome do time', max_length=200)
    time = models.ForeignKey(Time, on_delete=models.CASCADE, related_name='estadios')
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE, verbose_name='Endereço')
    
    class Meta:
        verbose_name = 'Estadio'
        verbose_name_plural = 'estadios'
        db_table = 'estadio'
        
    def __str__(self):
        return self.nome


