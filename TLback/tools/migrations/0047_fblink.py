# Generated by Django 3.0.5 on 2020-07-26 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0046_auto_20200724_2124'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fblink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.CharField(max_length=1000)),
            ],
        ),
    ]
