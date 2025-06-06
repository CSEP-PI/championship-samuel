from .base import *

SECRET_KEY = 'django-insecure-7fo3s=#m4j)gkrr79r3vw0(936!x5nlz9xmx38ffzs(1qa-39#'

DEBUG = True

ALLOWED_HOSTS = ['*']

CORS_ALLOW_ALL_ORIGINS= True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'championdb',
        'USER': 'mysql',
        'PASSWORD': 'mysql',
        'PORT': 3306,
    }
}

