# Generated by Django 3.0.5 on 2020-06-18 08:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tools', '0034_auto_20200618_1309'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mail',
            name='roll_number',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='tools.Customer'),
        ),
    ]
