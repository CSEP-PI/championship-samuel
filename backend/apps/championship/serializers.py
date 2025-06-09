from multiprocessing.spawn import import_main_path
from players.models import Jogador
from rest_framework import serializers
from championship.models import Campeonato, Edicao, Partida
from players.models import Jogador
from teams.models import Time, Estadio
from address.models import Endereco

class CampeonatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campeonato
        fields = '__all__'
        
class EdicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Edicao
        fields = '__all__'
    
class PartidaSerializer(serializers.ModelSerializer):
    timem_nome = serializers.CharField(source='time_mandante.nome', read_only=True)
    timev_nome = serializers.CharField(source='time_visitante.nome', read_only=True)
    class Meta:
        model = Partida
        fields = '__all__'
        
class JogadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jogador
        fields = '__all__'
        
class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = ['id', 'nome']
        
class EstadioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estadio
        fields = '__all__'

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = '__all__'

