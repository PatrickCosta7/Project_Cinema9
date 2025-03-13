from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def movie_page(request, movie_id):
    return render(request, f'main/{movie_id}.html')