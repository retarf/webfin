from rest_framework import viewsets

from .models import Entry
from .serializers import EntrySerializer

class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

    def get_queryset(self):
        month = self.request.query_params.get('month', None)
        month += '-01'
        return Entry.objects.filter(month=month)

