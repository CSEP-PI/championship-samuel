from django.contrib import admin
from championship.models import Campeonato, Edicao, Partida
from teams.models import Time, Estadio, Endereco
from players.models import Jogador

# Register your models here.
admin.site.register(Campeonato)
admin.site.register(Edicao)
admin.site.register(Partida)
admin.site.register(Time)
admin.site.register(Estadio)
admin.site.register(Endereco)
admin.site.register(Jogador)
