import datetime
import collections

from django.test import TestCase
from budget.api import EntryViewSet
from rest_framework.test import APIClient

MULTIPLE_ENTRIES_RANGE = 10

class EntryHandler():

    def __init__(self):
        self.template = {
            'id': 1,
            'month': None,
            'name': 'test',
            'entry_creation_date': None,
            'entry_modification_date': None,
            'description': 'test description',
            'value': 10.99,
        }

    def get_entry(self, method='GET'):
        entry = ENTRY_TEMPLATE.copy()
        day_format = '%Y-%m-%d'
        month_format = '%Y-%m'
        now = datetime.datetime.now()
        entry['month'] = now.strftime(month_format)

        if method == 'GET':
            entry['entry_creation_date'] = now.strftime(day_format)
            entry['entry_modification_date'] = now.strftime(day_format)
        if method == 'POST':
            entry.pop('id')
            entry.pop('entry_creation_date')
            entry.pop('entry_modification_date')

        self.template['id'] += 1

        return entry

    def get_entries(self, method='GET'):
        n = MULTIPLE_ENTRIES_RANGE + 1
        entries = []
        for i in range(1, n):
            entry = self.get_entry(method)
            entries.append(entry)

        return entries
