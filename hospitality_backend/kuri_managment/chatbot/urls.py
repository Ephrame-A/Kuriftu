from django.urls import path
from .views import assistant_response

urlpatterns = [
    path('chatbot/', assistant_response, name='chatbot'),
]
