from django.urls import path
from api import views

urlpatterns = [
    # urls used in project

    path('sections/', views.sections_view),                          # main page, shows the list of sections
    path('sections/<int:pk>/', views.section_view),
    path('sections/<int:pk>/restaurants/', views.RestaurantsView.as_view()),  # restaurants of a certain section
    path('sections/<int:pk>/restaurants/<int:pk1>/', views.RestaurantView.as_view()),
    # path('cuisines/<int:pk1>/restaurants/<int:pk2>/reviews/', views.ReviewView.as_view()),
    path('orders/', views.OrderView.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),
    path('about_api/', views.description),
    path('about/', views.description)
    # urls for testing
]
