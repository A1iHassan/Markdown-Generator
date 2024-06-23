#!/usr/bin/python3
""" Defines a Flask blueprint for the routes."""
from flask import Blueprint, request
from app.services.gemini import Gemini
from dotenv import load_dotenv
import os


rephrase_blueprint = Blueprint('rephrase', __name__)


@rephrase_blueprint.route('/rephrase', strict_slashes=False, methods=['POST'])
def rephrase():
    """
    Handle POST requests to rephrase text.

    This function loads the API key from environment variables,
        retrieves the JSON payload from the request,
    uses the Gemini service to rephrase the provided text,
        and returns the rephrased text as a JSON response.

    Returns:
        dict: A JSON response containing the rephrased text.
    """

    # Load environment variables from a .env file
    load_dotenv()

    # Retrieve the API key from environment variables
    key = os.getenv("API")

    # Get the JSON payload from the request
    payload = request.get_json(silent=True)

    # Initialize the Gemini service with the API key
    model = Gemini(key)

    # Use the Gemini service to rephrase the provided text
    rephrased_text = model.rephrase(payload['text'])

    return rephrased_text
