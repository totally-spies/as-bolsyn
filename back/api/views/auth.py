from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework import generics
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from api.serializers import UserSerializer, RegisterSerializer


class Login(APIView):
    def post(self, request):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        user_info = User.objects.get(username=user)
        serializer = UserSerializer(user_info)
        is_admin = serializer.data['is_staff']
        name = serializer.data['first_name']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'is_admin': is_admin, 'name': name})


@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response(status=204)


class Register(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserInfo(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.request.user
