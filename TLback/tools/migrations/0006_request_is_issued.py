# Generated by Django 3.0.5 on 2020-05-21 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0005_auto_20200521_1322'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='is_issued',
            field=models.BooleanField(default=False),
        ),
    ]
