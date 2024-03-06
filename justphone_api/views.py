""" Views for the drf_api project. """

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view()
def root_view(request):
    """Root endpoint for the --justPhones-- drf_api."""
    return Response({"Message": "Welcome to the justPhones API!"})
