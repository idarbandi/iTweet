from django.db import models
from django.conf import settings

user = settings.AUTH_USER_MODEL

class Profile(models.Model):
    user = models.OneToOneField(user, on_delete=models.CASCADE)
    location = models.CharField(max_length=220, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)