import random

from django.conf import settings
from django.http import Http404, HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from django.utils.http import is_safe_url
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .forms import TweetForm
from .models import Tweet

ALLOWED_HOSTS = settings.ALLOWED_HOSTS
    
def home_view(request, *args, **kwargs):
    username = None
    if request.user.is_authenticated:
        username = request.user.username
    return render(request, "pages/home.html", context={"username": username}, status=200)

def tweets_list_view(request, *args, **kwargs):
    return render(request, "tweets/list.html")

def tweets_detail_view(request, tweetId, *args, **kwargs):
    return render(request, "tweets/detail.html", context={"tweetId": tweetId})

def tweets_profile_view(request, username, *args, **kwargs):
    return render(request, "tweets/profile.html", context={"profile_username": username})