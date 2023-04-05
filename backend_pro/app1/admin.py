from django.contrib import admin

from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','cust_nm','prod_nm','cust_addr','user_email']
