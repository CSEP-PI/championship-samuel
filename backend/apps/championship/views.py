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
        
        tabela = {}
        
        for partida in partidas:
            mandante = partida.time_mandante
            visitante = partida.time_visitante
            
            for time in [mandante, visitante]:
                if time.id not in tabela:
                    tabela[time.id] = {
                        "time": time.nome,
                        "qtd_jogos": 0,
                        "pontos": 0,
                        "gols": 0,
                        "gols_s": 0,
                        "vitorias": 0,
                        "empates":0,
                        "derrotas": 0,
                        "saldo": 0,  
                    }
            #Mandente
            tabela[mandante.id]['qtd_jogos'] += 1
            tabela[mandante.id]['gols'] += partida.placar_mandante
            tabela[mandante.id]['gols_s'] += partida.placar_visitante
            tabela[mandante.id]['saldo'] = tabela[mandante.id]['gols'] - tabela[mandante.id]['gols_s']
            
            #Visitante
            tabela[visitante.id]['qtd_jogos'] += 1
            tabela[visitante.id]['gols'] += partida.placar_visitante
            tabela[visitante.id]['gols_s'] += partida.placar_mandante
            tabela[visitante.id]['saldo'] = tabela[visitante.id]['gols'] - tabela[visitante.id]['gols_s']
            
            #Resultado
            
            if partida.placar_mandante > partida.placar_visitante:
                tabela[mandante.id]['pontos'] += 3
                tabela[mandante.id]['vitorias'] += 1
                tabela[visitante.id]['derrotas'] += 1

            elif partida.placar_mandante == partida.placar_visitante:
                tabela[mandante.id]['pontos'] += 1
                tabela[visitante.id]['pontos'] += 1
                tabela[mandante.id]['empates'] += 1
                tabela[visitante.id]['empates'] += 1
                
            else:
                tabela[visitante.id]['pontos'] += 3
                tabela[visitante.id]['vitorias'] += 1
                tabela[mandante.id]['derrotas'] += 1

        print(tabela)
        return Response({
            "tabela": tabela
        }, status=status.HTTP_200_OK)

