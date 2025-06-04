from pyexpat import model
from tabnanny import verbose
from django.db import models

class Campeonato(models.Model):
    nome = models.CharField(verbose_name='nome do campeoato', max_length=200)

    class Meta:
        verbose_name = 'Campeonato'
        verbose_name_plural = 'Campeonatos'
        db_table = 'campeonato'
        
    def __str__(self):
        return self.nome


class Edicao(models.Model):
    ano = models.IntegerField(verbose_name='Ano')
    time = models.ManyToManyField('teams.Time')
    campeonato = models.ForeignKey(Campeonato, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Edição'
        verbose_name_plural = 'Edições'
        db_table = 'edicao'
    
    def __str__(self):
        return f'{self.ano} - {self.campeonato}'

    
class Partida(models.Model):
    edicao = models.ForeignKey(Edicao, on_delete=models.CASCADE)
    data = models.DateTimeField(verbose_name='Data', blank=False, null=False)
    time_mandante = models.ForeignKey('teams.Time', on_delete=models.CASCADE, related_name='time_mandante')
    time_visitante = models.ForeignKey('teams.Time', on_delete=models.CASCADE, related_name='time_visitante')
    placar_mandante = models.IntegerField(verbose_name='Placar do mandante', blank=False, null=False)
    placar_visitante = models.IntegerField(verbose_name='Placar do visitante', blank=False, null=False)
    
    class Meta:
        verbose_name = 'Partida'
        verbose_name_plural = 'Partidas'
        db_table = 'partida'
    
    def __str__(self):
        return f'{self.time_mandante} x {self.time_visitante}'
