from flask import Flask, request, jsonify, render_template
from gpt import linkget_response, get_response
from validURL import is_valid_url, is_valid_link
app = Flask(__name__)
prompt = "https://www.reuters.com/legal/trump-loses-key-ruling-ahead-writer-carrolls-defamation-trial-2023-09-06/"




# Example usage:



@app.route('/')
def index():
    if is_valid_link(prompt):
        print("The input appears to be a valid link.")
        if is_valid_url(prompt):
            print("The URL is valid.")
            response, percent = linkget_response(prompt)
            return response, percent
        else:
            return "The URL is not valid or could not be reached."
    else:
        response, percent = get_response(prompt)
        return response, percent
        
    

@app.route('/hello')
def hello():
    return 'Hello, World'

if __name__ == '__main__':
    app.run()