from django.urls import path
from api import views

urlpatterns = [
    # urls used in project

    path('cuisines/', views.CuisineView.as_view()),                           # main page, shows the list of cuisines
    path('cuisines/<int:pk>/restaurants/', views.RestaurantsView.as_view()),  # restaurants of a certain cuisine
    path('cuisines/<int:pk>/restaurant/<int:pk2>/', views.RestaurantsView.as_view()),
    path('cuisines/<int:pk>/restaurant/<int:pk2>/dishes/', views.DishView.as_view()),
    path('cuisines/<int:pk>/restaurant/<int:pk2>/dish/<int:pk3>', views.DishView.as_view()),
    # path('cuisines/<int:pk>/restaurants/<int:pk2>/reviews/', views.ReviewView.as_view()),
    path('orders/', views.OrderView.as_view()),
    path('users/', views.UserList.as_view()),
    path('user/', views.UserInfo.as_view()),
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),
    path('about_api/', views.description)
    # urls for testing
]
