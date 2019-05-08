from django.db import models
from django.contrib.auth.models import User


class Cuisine(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return '{}:{}'.format('id', 'name')


class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE)

    def __str__(self):
        return '{}:{}'.format('id', 'name')


class Dish(models.Model):
    name = models.CharField(max_length=50)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return '{}:{}'.format('name', 'restaurant')


class Order(models.Model):
    dish_name = models.CharField(max_length=200)
    count = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return '{}:{}'.format('id', 'dish_name')


class Review(models.Model):
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return '{}:{}'.format('user', 'restaurant')
