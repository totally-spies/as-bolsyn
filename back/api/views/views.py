from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from api.models import Cuisine, Restaurant, Dish, Order, Review
from api.serializers import CuisineSerializer, RestaurantSerializer, \
                            DishSerializer, OrderSerializer, ReviewSerializer


class CuisineView(generics.ListAPIView):
    serializer_class = CuisineSerializer
    def get_queryset(self):
        return Cuisine.objects.filter(cuisine=self.kwargs['pk'])


class RestaurantsView(generics.ListCreateAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return Restaurant.objects.filter(restaurant=self.kwargs['pk2'])


class DishView(generics.ListCreateAPIView):
    serializer_class = DishSerializer

    def get_queryset(self):
        return Dish.objects.filter(dish=self.kwargs['pk3'])


class OrderView(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Review.objects.filter(restaurant=self.kwargs['pk2'])

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
