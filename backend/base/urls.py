from django.urls import path
from . import views

urlpatterns = [
    # Route to show available API routes
    path('', views.getRoutes, name='routes'),
    
    # Route to get all products
    path('products/', views.getProducts, name='products'),
    
    # Route to get a single product by its ID
    path('products/<str:pk>/', views.getProduct, name='product'),
]
