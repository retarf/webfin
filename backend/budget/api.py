import datetime

from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Entry
from .serializers import EntrySerializer


FORMAT = '%Y-%m'


class EntryViewSet(viewsets.ModelViewSet):

    queryset = Entry.objects.all()
    serializer_class = EntrySerializer

    def is_month_valid(self, month):

        result = True
        if int(month[0]) > 1:
            result = False
        if int(month[0]) == 1 and int(month[1]) > 2:
            result = False

        return result

    def list(self, request):

        month = self.request.query_params.get('month', None)

        if month is None:
            month = datetime.datetime.now().strftime(FORMAT)
        else:
            month_number = month.split('-')[1]
            if not self.is_month_valid(month_number):
                return Response('Bad request format. Request valid format is RRRR-MM', status=status.HTTP_406_NOT_ACCEPTABLE)

        queryset = Entry.objects.filter(month=month)
        serializer = EntrySerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request, format=None):
        data = request.data.copy()
        if isinstance(data, list):
            serializer = EntrySerializer(data=data, many=True)
        else:
            serializer = EntrySerializer(data=data)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_actual_month(request):
    return Response(datetime.datetime.now().strftime(FORMAT))
