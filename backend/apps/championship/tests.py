import pytest
from rest_framework.test import APIRequestFactory
from championship.views import TabelaView
from teams.models import Time
from championship.models import Partida, Edicao

@pytest.mark.django_db
def test_tabela_view_get(monkeypatch):
    factory = APIRequestFactory()
    request = factory.get("/tabela/")  # URL apenas para simular

    # Criação de times fictícios
    time1 = Time.objects.create(nome="Time A")
    time2 = Time.objects.create(nome="Time B")
    
    # Criação de edição e partida fictícias
    edicao = Edicao.objects.create(ano=2025)
    Partida.objects.create(
        edicao=edicao,
        time_mandante=time1,
        time_visitante=time2,
        data="2025-06-01"
    )

    view = TabelaView.as_view()
    response = view(request)

    assert response.status_code == 200
