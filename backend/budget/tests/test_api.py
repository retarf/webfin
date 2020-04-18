from django.test import TestCase
from budget.api import EntryViewSet
from rest_framework.test import APIClient

class EntryViewSetTestCase(TestCase):

    def setUp(self):
        #a = Entry(month='2020-04-01', name='test', value=10.99)
        self.client = APIClient()
        self.client.post('/budget/entries/', {"month": "2020-04", "name": "test", "description": "test description", "value": "10.99"})

    def test_get_status_code(self):
        response = self.client.get('/budget/entries/')
        assert response.status_code == 200

    def test_get_entries(self):
        response = self.client.get('/budget/entries/')
        print(response.data)
