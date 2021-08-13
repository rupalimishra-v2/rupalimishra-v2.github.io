from django.urls import path
from avenger import views

urlpatterns = [
    path("", views.about, name='about'),
    path("projects/", views.project_index, name="project_index"),
    path("projects/<int:pk>/", views.project_detail, name="project_detail"),
]