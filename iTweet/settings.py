from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
SECRET_KEY = 'django-insecure-1yp#g74mx3bbo35(v5m&_2k6u58i!@3zndc-*diln8pt57gu96'
DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']
LOGIN_URL = "/login"

MAX_TWEET_LENGTH = 240
TWEET_ACTION_OPTIONS = ["like", "unlike", "retweet"]

ALLOWED_HOSTS = []

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',     # for localhost (REACT Default)
    'http://127.0.0.1:3000',     # for network 
    'http://localhost:8080',     # for localhost (Developlemt)
    'http://192.168.0.50:8080',  # for network (Development)
)

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',     # for localhost (REACT Default)
    'http://192.168.0.50:3000',  # for network
    'http://localhost:8080',     # for localhost (Developlemt)
    'http://192.168.0.50:8080',  # for network (Development)
]



INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # third party Packages
    'corsheaders',
    'rest_framework',
    # internal
    'tweets',
    'accounts',
    'profiles'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'iTweet.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'iTweet.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'static-root')



DEFAULT_RENDERER_CLASSES = [
        'rest_framework.renderers.JSONRenderer',
    ]
DEFAULT_AUTHENTICATION_CLASSES = [
    'rest_framework.authentication.SessionAuthentication'
]

if DEBUG:
    DEFAULT_RENDERER_CLASSES += [
        'rest_framework.renderers.BrowsableAPIRenderer',
    ]
    
    # DEFAULT_AUTHENTICATION_CLASSES += [
    #     'tweets.rest_api.dev.DevAuthentication',
    # ]
    
REST_FRAMEWORK = {
    
    'DEFAULT_AUTHENTICATION_CLASSES': DEFAULT_AUTHENTICATION_CLASSES,
    'DEFAULT_RENDERER_CLASSES': DEFAULT_RENDERER_CLASSES
}
