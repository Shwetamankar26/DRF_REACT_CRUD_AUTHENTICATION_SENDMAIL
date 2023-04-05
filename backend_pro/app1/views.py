from .Serializers import ProductSerializer;
from rest_framework import viewsets;
from .models import Product;
from .utils import Send_Mail;
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class ProductViewset(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        user_email = 'shwetabarhe26@gmail.com'
        subject = 'Fetched data'
        body = 'Product data fetched successfully'
        Send_Mail.send_mail(subject=subject,body=body,to=[user_email])
        return response
    
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        user_email = 'shwetabarhe26@gmail.com'
        subject = 'Created data'
        body = 'Product data Created successfully'
        Send_Mail.send_mail(subject=subject,body=body,to=[user_email])
        return response
    
    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        user_email = 'shwetabarhe26@gmail.com'
        subject = 'Updated data'
        body = 'Product data Updated successfully'
        Send_Mail.send_mail(subject=subject,body=body,to=[user_email])
        return response
    
    def destroy(self, request, *args, **kwargs):
        response = super().destroy(request, *args, **kwargs)
        user_email = 'shwetabarhe26@gmail.com'
        subject = 'Delete data'
        body = 'Product data Deleted successfully'
        Send_Mail.send_mail(subject=subject,body=body,to=[user_email])
        return response
    

