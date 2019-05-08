from django.contrib import admin
from api.models import Cuisine, Restaurant, Dish, Order, Review

admin.site.register(Cuisine)
admin.site.register(Restaurant)
admin.site.register(Dish)
admin.site.register(Order)
admin.site.register(Review)
