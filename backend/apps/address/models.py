from django.db import models

# Create your models here.
class Endereco(models.Model):
    lagradouro = models.CharField(verbose_name='Logradouro', max_length=200)
    cep = models.CharField(verbose_name='CEP', max_length=9)
    cidade = models.CharField(verbose_name='Cidade', max_length=200)
    uf = models.CharField(verbose_name='UF', max_length=2)
    
    class Meta:
        verbose_name = 'Endereco'
        verbose_name_plural = 'enderecos'
        db_table = 'endereco'
    
    def __str__(self):
        return f'{self.lagradouro}, {self.cidade} - {self.uf}'
