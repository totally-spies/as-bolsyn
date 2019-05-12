from django.urls import path
from api import views

urlpatterns = [
    path('sections/', views.sections),
    path('sections/<int:pk>/', views.section),
    path('sections/<int:pk>/restaurants/', views.Restaurants.as_view()),
    path('sections/<int:pk>/restaurants/<int:pk1>/', views.Restaurant.as_view()),
    path('sections/<int:pk>/restaurants/<int:pk1>/dishes/', views.Dishes.as_view()),
    # path('cuisines/<int:pk1>/restaurants/<int:pk2>/reviews/', views.ReviewView.as_view()),
    path('orders/', views.OrderView.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),

]
