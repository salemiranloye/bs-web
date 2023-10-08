import os
import openai
import requests
from bs4 import BeautifulSoup
chat_line ="You are a fake news detector. Please evaluate the following news article, and clearly and separately state sources. please keep it in a formated way with if its true or not first. then check for an apperant biases and try to give a percentage of bias"
        


def get_response(prompt):
    # Set your OpenAI API key here
    openai.api_key = open('API', 'r').read()
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": chat_line
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )

    # Extract the assistant's response
    response_messages = response['choices'][0]['message']['content']

    # Split the response by '%' symbol
    response_parts = response_messages.split('%')

    # If there are parts after splitting, there is a '%' symbol
    if len(response_parts) > 1:
        main_message = response_parts[0]
        percentage_message = '%' + response_parts[1]
    else:
        # No '%' symbol found
        main_message = response_messages
        percentage_message = None

    return main_message, percentage_message



def linkget_response(prompt):
    r = requests.get(prompt)
    soup = BeautifulSoup(r.text, "html.parser")
    prompt = soup.text

    # Set your OpenAI API key here
    openai.api_key = open('API', 'r').read()
          
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": chat_line
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    response_messages = response['choices'][0]['message']['content']

    response_parts = response_messages.split('%')

    # If there are parts after splitting, there is a '%' symbol
    if len(response_parts) > 1:
        main_message = response_parts[0]
        percentage_message = '%' + response_parts[1]
    else:
        # No '%' symbol found
        main_message = response_messages
        percentage_message = None

    return main_message, percentage_message



