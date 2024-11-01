from flask import Flask
import secrets 

SECRET_KEY = secrets.token_hex(64)

def create_app():
    app = Flask(__name__)
    app.secret_key =  secrets.token_hex(64)

    from app.routes.lmcc_views import admin_blueprint
    app.register_blueprint(admin_blueprint, url_prefix='/LMCC')

   

    return app
