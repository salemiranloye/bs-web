import requests
def is_valid_url(url):
    try:
        response = requests.get(url)
        # Check if the response status code is in the 200-299 range, indicating a successful request.
        if 200 <= response.status_code < 300:
            return True
        else:
            return False
    except requests.exceptions.RequestException:
        # Handle exceptions if the request fails (e.g., network error).
        return False

import re

def is_valid_link(link):
    # Regular expression pattern for a basic URL validation.
    url_pattern = re.compile(
        r'^(http|https|ftp)://[A-Za-z0-9.-]+(/[A-Za-z0-9/?=&%]*)?$'
    )
    
    return bool(url_pattern.match(link))


