from django.db import models

class Entry(models.Model):
    entry_creation_date = models.DateField(auto_now_add=True)
    entry_modification_date = models.DateField(auto_now=True)
    month = models.CharField(max_length=7)
    name = models.CharField(max_length=200)
    description = models.TextField()
    value = models.DecimalField(max_digits=8,decimal_places=2)
