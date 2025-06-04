from .base import *

#SECRET_KEY = ''

DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'campDB',
        'USER': 'root',
        'PASSWORD': 'password',
        'PORT': 3306,
    }
}

#CORS_ALLOWED_ORIGINS = [
#    "https://example.com",
#    "https://sub.example.com",
#    "http://localhost:8080",
#    "http://127.0.0.1:9000",
#]
