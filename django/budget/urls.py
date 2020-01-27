from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .api import EntryViewSet

namespace = 'entry'

entry_router = DefaultRouter()
entry_router.register('entries', EntryViewSet)

urlpatterns = [
    path('', include(entry_router.urls), name='entries'),
]
