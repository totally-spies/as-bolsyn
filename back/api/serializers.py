from rest_framework import serializers
from api.models import Restaurant, Cuisine, Order, Review, Dish
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'password', 'login', 'is_admin')

class CuisineSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        cuisine = Cuisine(**validated_data)
        cuisine.save()
        return cuisine

    def update(self, instance, validated_data):
        instance.name = validated_data('name', instance.name)
        instance.save()
        return instance

class RestaurantSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    class Meta:
        model = Restaurant
        fields = ('id', 'name')

class DishSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    restaurant = RestaurantSerializer(required=True)

    class Meta:
        model = Dish
        fields = ('id', 'name', 'restaurant')

class OrderSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    dish_name = DishSerializer(required=True)
    count = serializers.IntegerField(read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Order
        fields = ('id', 'dish_name', 'count', 'user')

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    restaurant = RestaurantSerializer()
    text = serializers.CharField(required=True)

    class Meta:
        model = Review
        fields = ('user', 'restaurant', 'text')

