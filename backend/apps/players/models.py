from tabnanny import verbose
from django.db import models

# Create your models here.
class Jogador(models.Model):
    GEN_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Feminino')
    ]
    
    nome = models.CharField(verbose_name='Nome', max_length=200)
    data_nascimento = models.DateField(verbose_name='Data de nascimento')
    genero = models.CharField(verbose_name='Gênero', max_length=1, choices=GEN_CHOICES, default='M')
    altura = models.IntegerField(verbose_name='Altura (cm)')
    time = models.ForeignKey('teams.Time', on_delete=models.CASCADE, related_name='jogadores')
    
    class Meta:
        verbose_name = 'Jogador'
        verbose_name_plural = 'Jogadores'
        db_table = 'jogador'
    
    def __str__(self):
        return self.nome
