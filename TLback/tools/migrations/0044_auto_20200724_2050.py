# Generated by Django 3.0.7 on 2020-07-24 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0043_auto_20200719_2031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='issued_time',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='request',
            name='returned_time',
            field=models.DateTimeField(blank=True),
        ),
    ]
