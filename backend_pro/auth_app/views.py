from rest_framework.generics import CreateAPIView
from .serializers import UserSerializer
from django.core.mail import EmailMessage
from rest_framework.response import Response

class UserRegisterAPI(CreateAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user_Email = serializer.data.get('email')
             
            mail =  EmailMessage(subject='User Creatation',body='User Created Successfully',to=[user_Email])
            mail.send()
            return Response(data=serializer.data,status=201)
        return Response(data=serializer.errors,status=400)
