import json
import requests
from flask import Flask, jsonify, make_response

app = Flask(__name__)


def update_links():
    file = open("./backend-mock/requestsData.json", "r")
    requests_data = json.load(file)
    file.close()
    for request in requests_data:
        request = requests.get(
            f"https://invidious.protokolla.fi/api/v1/videos/{request['videoId']}"
        )
        request_json = json.loads(request.text)
        print(request_json["formatStreams"][0]["url"])


@app.route("/queue", methods=["GET"])
def queue():
    # update_links()
    file = open("./backend-mock/requestsData.json", "r")
    requests = json.load(file)
    file.close()
    resp = make_response(jsonify(requests), 200)
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6789, debug=True)
