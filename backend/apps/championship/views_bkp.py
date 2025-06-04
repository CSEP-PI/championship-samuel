import time
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from championship.serializers import CampeonatoSerializer, EdicaoSerializer, PartidaSerializer
from championship.models import Campeonato, Edicao, Partida
from teams.models import Time
from django.utils import timezone
from rest_framework import status

class CampeonatoViewSet(ModelViewSet):
    queryset = Campeonato.objects.all()
    serializer_class = CampeonatoSerializer
    
class EdicaoViewSet(ModelViewSet):
    queryset = Edicao.objects.all()
    serializer_class = EdicaoSerializer
    
class PartidaViewSet(ModelViewSet):
    queryset = Partida.objects.all()
    serializer_class = PartidaSerializer
    
class TabelaView(APIView):
    def get(self, request):
        ano_atual = timezone.now().year
        partidas = Partida.objects.filter(edicao__ano=ano_atual)
        
        times = []
        tabela = []
        
        for partida in partidas:
            mandante = partida.time_mandante.id
            visitante = partida.time_visitante.id
            
            def addTime(time):
                if time in times:
                    return
                else:
                    times.append(time)
                    
            addTime(visitante)
            addTime(mandante)
            
        
            for time in times: #decorre os 8 times e cria a tabela com os mesmos
                tabela.append({
                    "time": time,
                    "qtd_jogos": 0,
                    "pontos": 0,
                    "gols": 0,
                    "gols_s": 0,
                    "vitorias": 0,
                    "empates":0,
                    "derrotas": 0,
                    "saldo": 0,
                })
                
                partidasV = partidas.filter(time_visitante=time)
                partidasM = partidas.filter(time_mandante=time)
                
                #for x in tabela:
                 #   for i in range(len(tabela)):
                  #      print(tabela[i])
                        
                if partidasV: # se tiver partidas de visistantes
                    for partidaV in partidasV:
                        if partidaV.placar_visitante > partidaV.placar_mandante: #condição de vitoria visitante
                            # decorre tabela filtrando pelo time
                            # atualiza vitoria
                            for item in tabela:
                                if item.time == time:
                                    item.qtd_jogos = item.qtd_jogos + 1
                                    item.pontos = item.pontos + 3
                                    item.gols = item.gols + partidaV.placar_visitante
                                    item.gols_s = item.gols_s + partidaV.placar_mandante
                                    item.vitorias = item.vitorias + 1
                                    item.saldo = item.gols - item.gols_s
                        elif partidaV.placar_visitante == partidaV.placar_mandante: #condição de empate
                            for item in tabela:
                                if item.time == time:
                                    item.qtd_jogos = item.qtd_jogos + 1
                                    item.pontos = item.pontos + 1
                                    item.gols = item.gols + partidaV.placar_visitante
                                    item.gols_s = item.gols_s + partidaV.placar_mandante
                                    item.empates = item.empates + 1
                                    item.saldo = item.gols - item.gols_s
                        elif partidaV.placar_visitante < partidaV.placar_mandante: #condição de derrota             
                            for item in tabela:
                                for i in range(len(tabela)):
                                    if item.time == time:
                                        item.qtd_jogos = item.qtd_jogos + 1
                                        item.gols = item.gols + partidaV.placar_visitante
                                        item.gols_s = item.gols_s + partidaV.placar_mandante
                                        item.derrotas = item.derrotas + 1
                                        item.saldo = item.gols - item.gols_s
                                    
                if partidasM:
                    for partidaM in partidasM:
                        if partidaM.placar_mandante > partidaM.placar_visitante:    
                            for item in tabela:
                                if item.time == time:
                                    item.qtd_jogos = item.qtd_jogos + 1
                                    item.pontos = item.pontos + 3
                                    item.gols = item.gols + partidaV.placar_visitante
                                    item.gols_s = item.gols_s + partidaV.placar_mandante
                                    item.vitorias = item.vitorias + 1
                                    item.saldo = item.gols - item.gols_s
                        elif partidaM.placar_mandante == partidaM.placar_visitante:
                            for item in tabela:
                                if item.time == time:
                                    item.qtd_jogos = item.qtd_jogos + 1
                                    item.pontos = item.pontos + 1
                                    item.gols = item.gols + partidaV.placar_visitante
                                    item.gols_s = item.gols_s + partidaV.placar_mandante
                                    item.empates = item.empates + 1
                                    item.saldo = item.gols - item.gols_s
                        else:
                            for item in tabela:
                                if item.time == time:
                                    item.qtd_jogos = item.qtd_jogos + 1
                                    item.gols = item.gols + partidaV.placar_visitante
                                    item.gols_s = item.gols_s + partidaV.placar_mandante
                                    item.derrotas = item.derrotas + 1
                                    item.saldo = item.gols - item.gols_s
                                    
        #print(times)
        #print(tabela)
        return Response({
            "tabela": tabela
        }, status=status.HTTP_200_OK)

