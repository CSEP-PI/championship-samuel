from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from championship.views import CampeonatoViewSet, EdicaoViewSet, PartidaViewSet, TabelaView
from teams.views import TimeViewSet, EstadioViewSet, EnderecoViewSet
from players.views import JogadorViewSet
from django.views.generic import RedirectView

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

router = DefaultRouter()

router.register(r'campeonatos', CampeonatoViewSet, basename='campeonatos')
router.register(r'edicoes', EdicaoViewSet, basename='edicoes')
router.register(r'partidas', PartidaViewSet, basename='partidas')
router.register(r'times', TimeViewSet, basename='times')
router.register(r'estadios', EstadioViewSet, basename='estadios')
router.register(r'enderecos', EnderecoViewSet, basename='enderecos')
router.register(r'jogadores', JogadorViewSet, basename='jogadores')


schema_view = get_schema_view(
   openapi.Info(
      title="API",
      default_version='v1',
      description="controle de campeonatos",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RedirectView.as_view(url='/swagger/', permanent=False)),  # Redireciona a raiz para /swagger/
    path('api/', include(router.urls)),
    path('api/tabela/', TabelaView.as_view(), name='tabela'),

   #Swagger
   path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]
