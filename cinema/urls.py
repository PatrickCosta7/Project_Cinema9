from django.urls import path
from cinema.views import index, movie_page

urlpatterns = [
    path('', index, name='index'),
    path('filme/<str:movie_id>', movie_page, name='movie_page'),
]