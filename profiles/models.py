from django.db import models
from django.conf import settings
from django.db.models.signals import post_save

user = settings.AUTH_USER_MODEL

class Profile(models.Model):
    user = models.OneToOneField(user, on_delete=models.CASCADE)
    location = models.CharField(max_length=220, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    
    
def user_did_save(sender, instance, created, *args, **kwargs):
    Profile.objects.get_or_create(user=instance)
    if created:
        profile = Profile.objects.get_or_create(user=instance)
    
post_save.connect(user_did_save, sender=user)