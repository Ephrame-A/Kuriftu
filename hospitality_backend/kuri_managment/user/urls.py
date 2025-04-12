from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView
)
from .views import RegisterView, UserProfileView, ChangePasswordView, LogoutView, CustomTokenObtainPairView , login_view

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('logout/', LogoutView.as_view(), name='logout'),
    
    path('login/', login_view, name='token_obtain_pair'),  # login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # refresh
]
