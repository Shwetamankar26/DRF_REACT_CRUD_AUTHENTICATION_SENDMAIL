from django.db import models

class Product(models.Model):
    cust_nm = models.CharField(max_length=30)
    prod_nm = models.CharField(max_length=30)
    cust_addr = models.CharField(max_length=30)
    user_email = models.EmailField(null=True)

