import datetime
import collections

from django.test import TestCase
from budget.api import EntryViewSet
from rest_framework.test import APIClient

ENTRY_TEMPLATE = {
    'id': 1,
    'month': None,
    'name': 'test',
    'entry_creation_date': None,
    'entry_modification_date': None,
    'description': 'test description',
    'value': 10.99,
}

class EntryViewSetTestCase(TestCase):

    def setUp(self):
        client = APIClient()
        entry = self.get_entry(method='POST')
        client.post('/budget/entries/', entry, format='json')

    def get_entry(self, method='GET'):
        entry_template = ENTRY_TEMPLATE
        day_format = '%Y-%m-%d'
        month_format = '%Y-%m'
        now = datetime.datetime.now()
        entry_template['month'] = now.strftime(month_format)

        if method == 'GET':
            entry_template['entry_creation_date'] = now.strftime(day_format)
            entry_template['entry_modification_date'] = now.strftime(day_format)

        return entry_template

    def test_get_status_code(self):
        client = APIClient()
        response = client.get('/budget/entries/')
        assert response.status_code == 200

    def test_get_entries(self):
        client = APIClient()
        response = client.get('/budget/entries/')
        entry = self.get_entry()
        assert dict(response.data[0]) == entry

    def test_post_status_code(self):
        client = APIClient()
        entry = self.get_entry(method='POST')
        response = client.post('/budget/entries/', entry, format='json')
        assert response.status_code == 201

    def test_post_entry(self):
        client = APIClient()
        entry = self.get_entry(method='POST')
        response = client.post('/budget/entries/', entry, format='json')
        assert response.data == entry
