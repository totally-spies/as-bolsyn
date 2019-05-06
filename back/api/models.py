from django.db import models
from django.contrib.auth.models import User

class Cuisine(models.Model):
    id = models.IntegerField()
    name = models.CharField(max_length=50)

    def __str__(self):
        return '{}:{}'.format('id', 'name')

class Restaurant(models.Model):
    id = models.IntegerField()
    name = models.CharField(max_length=50)

    def __str__(self):
        return '{}:{}'.format('id','name')

class Dish(models.Model):
    id = models.IntegerField()
    name = models.CharField()
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return '{}:{}'.format('name', 'restaurant')


class Order(models.Model):
    id = models.IntegerField()
    dish_name = models.CharField()
    count = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return '{}:{}'.format('id', 'dish_name')

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    text = models.TextField()

    def __str__(self):
        return '{}:{}'.format('user', 'restaurant')


