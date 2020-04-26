import datetime
import collections

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

from budget.models import Entry
from budget.api import EntryViewSet
from budget.serializers import EntrySerializer
#from budget.tests.handlers import EntryHandler

def create_entry(n=1):
    return Entry.objects.create(
        month='2020-04',
        name='test{0}'.format(n),
        description='test{0} description'.format(n),
        value=10.99
    )

def create_entry_list(n):
    n += 1
    entries = []
    for i in range(1, n):
        entries.append(create_entry(i))
    return entries


class EntryTest(TestCase):
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
        entries = create_entry_list(10)

        client = APIClient()
        response = client.get('/budget/entries/')
        serializer = EntrySerializer(entries, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_single_entry(self):
        entry = create_entry()

        client = APIClient()
        response = client.get('/budget/entries/{id}/'.format(id=entry.id))
        serializer = EntrySerializer(entry)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_update_entry(self):
        entry = create_entry()
        data = {'name': 'NewName', 'month': '1999-12', 'description': 'New description', 'value': 999.99}

        client = APIClient()
        response = client.put('/budget/entries/{id}/'.format(id=entry.id), data=data, format='json')
        new_entry = Entry.objects.get(id=entry.id)
        serializer = EntrySerializer(new_entry)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_delete_entry(self):
        entry = create_entry()

        client = APIClient()
        response = client.get('/budget/entries/{id}/'.format(id=entry.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = client.delete('/budget/entries/{id}/'.format(id=entry.id))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        response = client.delete('/budget/entries/{id}/'.format(id=entry.id))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
