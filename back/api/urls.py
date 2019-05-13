from django.urls import path
from api import views
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('sections/', views.sections_view),
    path('sections/<int:pk>/', views.section_view),
    path('sections/<int:pk>/restaurants/', views.Restaurants.as_view()),
    path('restaurants/<int:pk>/', views.RestaurantView.as_view()),
    path('restaurants/<int:pk>/dishes/', views.Dishes.as_view()),
    path('dishes/<int:pk>/', views.DishView.as_view()),
    path('restaurants/<int:pk>/reviews/', views.Reviews.as_view()),
    path('orders/', views.Orders.as_view()),
    path('orders/<int:pk>/', views.OrderView.as_view()),
    path('clear/', views.Clearer.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/', views.Login.as_view()),
    path('logout/', views.logout),
    path('register/', csrf_exempt(views.Register.as_view())),
    path('', views.description),
]
