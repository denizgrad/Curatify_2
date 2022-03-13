from operator import index
from .views import index
from django.urls import path

app_name = 'frontend' # django knows app name so redirect() works

urlpatterns = [
    path('', index, name=''), # django knows app name + method name so redirect() works
    path('join', index),
    path('info', index),
    path('create', index),
    path('room/<str:roomCode>', index),
]
