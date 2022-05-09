from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader


def index(request):
  return HttpResponse("HOME")
  #return render(request, 'app/index.html')
# Create your views here.
