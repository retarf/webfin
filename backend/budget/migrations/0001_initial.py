# Generated by Django 2.0 on 2020-01-24 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Entry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entry_creation_date', models.DateField(auto_now_add=True)),
                ('entry_modification_date', models.DateField(auto_now=True)),
                ('month', models.DateField()),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('value', models.FloatField()),
            ],
        ),
    ]
