# Generated by Django 3.0.5 on 2020-05-23 06:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0006_request_is_issued'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='time',
            field=models.IntegerField(),
        ),
    ]
