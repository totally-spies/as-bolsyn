from django.db import models
from django.contrib.auth.models import User


class Section(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return '{}'.format(self.name)


class Restaurant(models.Model):
    name = models.CharField(max_length=50)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.name)


class Dish(models.Model):
    name = models.CharField(max_length=50)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.name)


class Order(models.Model):
    dish_name = models.CharField(max_length=200)
    count = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.dish_name, self.count)


class Review(models.Model):
    text = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.user, self.restaurant)
