# Generated by Django 2.0 on 2020-02-23 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budget', '0002_auto_20200221_1740'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entry',
            name='value',
            field=models.DecimalField(decimal_places=2, max_digits=2),
        ),
    ]