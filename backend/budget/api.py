from rest_framework import viewsets
from rest_framework.response import Response

from .models import Entry
from .serializers import EntrySerializer

class EntryViewSet(viewsets.ModelViewSet):

    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

    def get_queryset(self):
        month = self.request.query_params.get('month', None)
        month += '-01'

        return Entry.objects.filter(month=month)

    def create(self, request, format=None):
        request.data['month'] += '-01'
        serializer = EntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(request.data)

