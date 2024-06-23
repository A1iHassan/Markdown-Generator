## Overview

This Flask application provides an API endpoint for rephrasing text using a service called Gemini. The application is designed to handle POST requests to the `/rephrase` route and uses environment variables to manage the API key securely.

## Project Structure

flask/
├── app/
│ ├── init.py # Initializes the Flask application
│ ├── routes/
│ │ ├── init.py # Empty file to make 'routes' a module
│ │ └── rephrase.py # Defines the /rephrase endpoint
│ └── services/
│ ├── init.py # Empty file to make 'services' a module
│ └── gemini.py # Contains the Gemini class for rephrasing text
├── run.py # Main entry point for the Flask application
├── .env # Environment variables (e.g., API key)
└── README.md # Project documentation


## File Descriptions

- **`run.py`**: Main entry point for running the Flask application. It creates, configures and registers blueprints for the Flask app and starts the server.
- **`app/__init__.py`**:  Empty file.
- **`app/routes/__init__.py`**: Empty file to make the 'routes' directory a Python module.
- **`app/routes/rephrase.py`**: Defines a Flask blueprint for the `/rephrase` route. It handles POST requests to rephrase text using the Gemini API.
- **`app/services/__init__.py`**: Empty file to make the 'services' directory a Python module.
- **`app/services/gemini.py`**: Contains the `Gemini` class, which interacts with Google's GenerativeAI model to rephrase text.
- **`.env`**: File for storing environment variables, such as the API key. This file should not be committed to version control.
- **`README.md`**: Documentation for the project.

## API Usage
#### Rephrase Endpoint

URL: /rephrase
Method: POST
Content-Type: application/json

##### Request Payload

{"text": "Text to be rephrased"}

##### Response
Content-Type: application/json 
{"rephrased_text": "Rephrased text here"}

### Example Curl Request

curl -X POST http://0.0.0.0:5000/rephrase  -H "Content-Type: application/json"  -d '{"text": "Hello, world!"}'

##### Response

{
"rephrased_text":  [
"A simple greeting is being sent out.",
"It's a common phrase used in programming.",
"It's often used as a test to see if a system is working.",
"The phrase is a way to acknowledge the existence of the world."]
}
