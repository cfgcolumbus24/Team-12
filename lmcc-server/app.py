from flask import Flask, request, jsonify, make_response
import openai
import os
import logging

from flask_cors import CORS

app = Flask(__name__)
CORS(app)


class OpenAIFacade:
    def __init__(self):
        self.client = openai.OpenAI(api_key=os.environ["OPENAI_API_KEY"])
        self.system_message = "You are an AI Specialist that specilaizing in choosing tags for a certain description. Given a description and a set of tags please return all relevent tags ordered by the most confident (first is most condifedent). please return tags seperated by commas. If you cannot find any assocaited tags please just return 1 tag General Here are the Tags you can choose from (Art, Music, Film, Dance, Guitar, Performance, Painting, Piano, Singing, Landscape, and Photography)"

    def parse_response(self, response):
        try:
            tags = response.split(",")

            data = {"message": tags, "code": "SUCCESS"}
            return make_response(jsonify(data), 200)

        except Exception as e:
            logging.error(f"Error parsing response: {e}")
            return make_response(
                jsonify({"message": "Error parsing response", "code": "ERROR"}), 500
            )

    def get_gpt4_response(self, prompt):
        try:
            if not isinstance(prompt, str):
                raise ValueError("The prompt must be a string.")

            response = self.client.chat.completions.create(
                model="gpt-4",
                messages=[
                    {"role": "system", "content": self.system_message},
                    {"role": "user", "content": prompt},
                ],
            )
            content = response.choices[0].message.content.strip()
            return self.parse_response(content)

        except Exception as e:
            logging.error(f"Failed to get GPT-4 response from OpenAI: {e}")
            data = {"message": f"Failed to return LLM Response: {e}", "code": "ERROR"}
            return make_response(jsonify(data), 500)


@app.route("/getAI", methods=["POST"])
def get_ai_response():
    data = str(request.get_json())
    openai_facade = OpenAIFacade()

    return openai_facade.get_gpt4_response(data)
