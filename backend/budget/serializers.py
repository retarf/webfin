from rest_framework import serializers

from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = '__all__'
    month = serializers.RegexField(r'(\d+){4}-(\d+){2}', max_length=7, min_length=7, allow_blank=False)
    value = serializers.FloatField()
