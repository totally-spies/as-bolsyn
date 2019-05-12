from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from api.models import Section, Restaurant, Dish, Order, Review
from api.serializers import SectionSerializer, RestaurantSerializer, \
                            DishSerializer, OrderSerializer, ReviewSerializer

from django.shortcuts import get_object_or_404


@api_view(['GET'])
def sections_view(request):
    if request.method == 'GET':
        sections = Section.objects.all()
        serializer = SectionSerializer(sections, many=True)
        return Response(serializer.data, status=200)


@api_view(['GET', 'POST'])
def restaurants_view(request, pk):
    if request.method == 'GET':
        section = get_object_or_404(Section, pk=pk)
        restaurants = section.restaurant_set.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        request.data['section'] = Section.objects.get(pk=pk)
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=500)


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
