# Generated by Django 4.0 on 2021-12-16 06:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=50, null=True)),
                ('profile_image', models.URLField(max_length=300, null=True)),
                ('description', models.CharField(max_length=1000, null=True)),
                ('kakao_id', models.IntegerField(unique=True)),
                ('is_creator', models.BooleanField(default=False)),
                ('email', models.CharField(max_length=200, null=True)),
            ],
            options={
                'db_table': 'users',
            },
        ),
        migrations.CreateModel(
            name='UserCourseStat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_stat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.coursestat')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
            options={
                'db_table': 'user_course_stats',
            },
        ),
        migrations.CreateModel(
            name='UserCourse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.course')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
            options={
                'db_table': 'user_courses',
            },
        ),
        migrations.CreateModel(
            name='SocialAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('channel', models.CharField(max_length=20)),
                ('url', models.URLField(max_length=300, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
            ],
            options={
                'db_table': 'social_accounts',
            },
        ),
        migrations.AddConstraint(
            model_name='usercoursestat',
            constraint=models.UniqueConstraint(fields=('user', 'course_stat'), name='unique user_course_stats'),
        ),
        migrations.AddConstraint(
            model_name='usercourse',
            constraint=models.UniqueConstraint(fields=('user', 'course'), name='unique user_courses'),
        ),
    ]
