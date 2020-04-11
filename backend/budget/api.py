import datetime

from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

from .models import Entry
from .serializers import EntrySerializer

FORMAT = '%Y-%m-01'

def is_month_valid(month):

    result = True
    if int(month[0]) > 1:
        result = False
    if int(month[0]) == 1 and int(month[1]) > 2:
        result = False

    return result

class EntryViewSet(viewsets.ModelViewSet):

    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

    def list(self, request):

        month = self.request.query_params.get('month', None)

        if month is None:
            now = datetime.datetime.now().strftime(FORMAT)
        else:
            month_number = month.split('-')[1]
            if not is_month_valid(month_number):
                return Response('Bad request format. Request valid format is RRRR-MM', status=status.HTTP_406_NOT_ACCEPTABLE)
            month += '-01'

        queryset = Entry.objects.filter(month=month)
        serializer = EntrySerializer(queryset, many=True)

        return Response(serializer.data, stauts=status.HTTP_200_OK)

    def create(self, request, format=None):
        request.data['month'] += '-01'
        serializer = EntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(request.data, status=status.HTTP_201_CREATED)

