from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated

from api.models import Section, Restaurant, Dish, Order, Review
from api.serializers import SectionSerializer, RestaurantSerializer, \
                            DishSerializer, OrderSerializer, ReviewSerializer

from django.shortcuts import get_object_or_404
from django.shortcuts import render


@api_view(['GET', 'POST'])
def sections_view(request):
    if request.method == 'GET':
        sections = Section.objects.all()
        serializer = SectionSerializer(sections, many=True)
        return Response(serializer.data, status=200)
    elif request.method == 'POST':
        serializer = SectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=500)


@api_view(['GET', 'PUT', 'DELETE'])
def section_view(request, pk):
    section = get_object_or_404(Section, pk=pk)
    if request.method == 'GET':
        serializer = SectionSerializer(section)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SectionSerializer(instance=section, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    elif request.method == 'DELETE':
        section.delete()
        return Response(status=204)


class Restaurants(APIView):
    def get(self, request, pk):
        section = get_object_or_404(Section, pk=pk)
        restaurants = section.restaurants.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = RestaurantSerializer(data=request.data)
        if serializer.is_valid():
            section = get_object_or_404(Section, id=self.kwargs['pk'])
            serializer.save(section=section)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=500)


class RestaurantView(APIView):
    def get(self, request, pk):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        serializer = RestaurantSerializer(restaurant)
        return Response(serializer.data)

    def put(self, request, pk):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        serializer = RestaurantSerializer(instance=restaurant, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        restaurant = get_object_or_404(Restaurant, pk=pk)
        restaurant.delete()
        return Response(status=204)


class Dishes(generics.ListCreateAPIView):
    serializer_class = DishSerializer

    def get_queryset(self):
        return Dish.objects.filter(restaurant=self.kwargs['pk'])

    def perform_create(self, serializer):
        restaurant = get_object_or_404(Restaurant, id=self.kwargs['pk'])
        serializer.save(restaurant=restaurant)


class DishView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer


class Reviews(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(restaurant=self.kwargs['pk'])

    def perform_create(self, serializer):
        restaurant = get_object_or_404(Restaurant, id=self.kwargs['pk'])
        serializer.save(user=self.request.user, restaurant=restaurant)


class Orders(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrderView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)


class Clearer(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request):
        Order.objects.filter(user=request.user).delete()
        return Response(status=204)


def description(request):
    return render(request, 'api.html')
