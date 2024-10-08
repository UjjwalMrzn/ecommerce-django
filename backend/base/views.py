from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',

        '/api/products/:id/reviews/',

        '/api/products/top/',
        '/api/products/:id/',

        '/api/products/delete/:id/',
        '/api/products/update/:id/',
    ]
    
    # Using DRF's Response instead of JsonResponse
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    # Again, using DRF's Response instead of JsonResponse
    return Response(products)


@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break

    return Response(product)
