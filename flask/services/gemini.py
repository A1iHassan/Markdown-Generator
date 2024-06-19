#!/usr/bin/python3
"""This script utilizes Google's GenerativeAI library to rephrase a given text sentence. 
    It defines a `Gemini` class that interacts with the GenerativeAI model to achieve this task.
    Note: This script requires the `google.generativeai` library to be installed.
"""
import google.generativeai as gemini
import logging


class Gemini():
    """A class that interacts with Google's GenerativeAI model for text rephrasing.

    Attributes:
        __key (str, private): The API key for accessing Google's GenerativeAI service.
        __engine (google.generativeai.GenerativeModel, private): The loaded GenerativeAI model instance.

    Methods:
        rephrase: rephrase given text sentace

    Raises:
        TypeError: If the API key is not provided during initialization.
    """

    __engine = None

    def __init__(self, key):
        """
        Initializes a `Gemini` instance with the provided API key.

        Args:
            key (str): The API key for accessing Google's GenerativeAI service.

        Raises:
            TypeError: If the provided key is None.
        """
        self.__key = key
        if self.__key is None:
            raise TypeError("Missing API KEY")

        gemini.configure(api_key=self.__key)
        self.__logger = logging.getLogger(__name__)

    try:
        __engine = gemini.GenerativeModel(
                "gemini-1.5-flash",
                generation_config={"response_mime_type": "application/json"}
                )
    except Exception as e:
        self.__logger.error(f"Error initializing the model: {e}")
        raise

    def rephrase(self, text):
        """
        Rephrases the provided text sentence into four different sentences using the GenerativeAI model.

        Args:
            text (str): The text sentence to be rephrased.

        Returns:
            str: The JSON-formatted response containing four rephrased sentences.
        """

        prompt = f"""Here is some text I'd like you to rephrase: \
        '{text}' \
        rephrase it in four sentances and Use the JSON format"""
        
        try:
            return self.__engine.generate_content(prompt).text
        except Exception as e:
            self.__logger.error(f"Error generating rephrased text: {e}")
            return None
