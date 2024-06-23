#!/usr/bin/python3
"""Main entry point for the Flask application."""
from flask import Flask
from flask_cors import CORS
from app.routes.rephrase import *


def create_app():
    """
    Create and configure the Flask application.

    Returns:
        Flask: The configured Flask application.
    """

    app = Flask(__name__)

    CORS(app)

    app.register_blueprint(rephrase_blueprint)

    return app


app = create_app()

if __name__ == '__main__':
    # delete .run() args
    app.run(host='0.0.0.0', port=5000, debug=True)
