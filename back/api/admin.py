from django.contrib import admin
from api.models import Section, Restaurant, Dish, Order, Review


@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'address', 'contact', 'avg_cost', 'section', 'image_url',)


@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'restaurant',)


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'dish_name', 'count', 'user',)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'user', 'restaurant',)
