import datetime
import collections

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

from budget.models import Entry
from budget.api import EntryViewSet
from budget.serializers import EntrySerializer
#from budget.tests.handlers import EntryHandler


class GetEntryTest(TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_create_several_entries(self):
        data = [
            {'name': 'test1', 'month': '2020-04', 'description': 'test1 description', 'value': 99.99},
            {'name': 'test2', 'month': '2020-04', 'description': 'test2 description', 'value': 66.66},
        ]
        client = APIClient()
        response = client.post('/budget/entries/', data, format='json')
        entries = Entry.objects.all()
        serializer = EntrySerializer(entries, many=True)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(serializer.data, response.data)

    def test_create_single_entry(self):
        data = {'name': 'test1', 'month': '2020-04', 'description': 'test1 description', 'value': 99.99}
        client = APIClient()
        response = client.post('/budget/entries/', data, format='json')
        entry = Entry.objects.get(id=response.data['id'])
        serializer = EntrySerializer(entry)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(serializer.data, response.data)

    def test_get_all_entries(self):
        entry1 = Entry.objects.create(
            month='2020-04',
            name='test1',
            description='test1 description',
            value=10.99
            )

        entry2 = Entry.objects.create(
            month='2020-04',
            name='test2',
            description='test2 description',
            value=99.99
            )


        client = APIClient()
        response = client.get('/budget/entries/')
        entries = [entry1, entry2]
        serializer = EntrySerializer(entries, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_single_entry(self):
        entry = Entry.objects.create(
            month='2020-04',
            name='test1',
            description='test1 description',
            value=10.99
            )

        client = APIClient()
        response = client.get('/budget/entries/{id}/'.format(id=entry.id))
        serializer = EntrySerializer(entry)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

