# Generated by Django 3.0.5 on 2020-06-16 16:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0026_customer_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='is_flagged',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='flag',
            name='item',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='tools.Item'),
        ),
        migrations.AlterField(
            model_name='item',
            name='display',
            field=models.BooleanField(default=True),
        ),
    ]
