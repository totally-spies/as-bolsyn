from rest_framework import serializers
from api.models import Section, Restaurant, Order, Review, Dish
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'is_staff')


class SectionSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        section = Section(**validated_data)
        section.save()
        return section

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class RestaurantSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    section = SectionSerializer(read_only=True)

    def create(self, validated_data):
        restaurant = Restaurant(**validated_data)
        restaurant.save()
        return restaurant

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class DishSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Dish
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    dish_name = serializers.CharField(required=True)
    count = serializers.IntegerField(required=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    text = serializers.CharField(required=True)
    user = UserSerializer(read_only=True)
    restaurant = RestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
