from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path  # url()
from django.views.generic import TemplateView
from accounts.views import login_view, logout_view, register_view
from tweets.views import tweets_list_view, tweets_detail_view, home_view

urlpatterns = [
    path('', home_view),
    path('admin/', admin.site.urls),
    path('global/', tweets_list_view),
    path('login/', login_view),
    path('logout/', logout_view),
    path('register/', register_view),
    path('<int:tweet_id>', tweets_detail_view),
    path('profiles/', include('profiles.urls')),
    path('api/tweets/', include('tweets.api.urls')),
    path('api/profiles/', include('profiles.api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, 
                document_root=settings.STATIC_ROOT)