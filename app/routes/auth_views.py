import os
from functools import wraps

import requests
from flask import (
    Blueprint,
    jsonify,
    flash,
    make_response,
    redirect,
    render_template,
    request,
    session,
    url_for,
)





auth_views = Blueprint('auth_views', __name__)
app_id = os.getenv("APP_ID")
password_portal_url = os.getenv('PASSWORD_PORTAL_ENDPOINT')

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        
        if 'username' not in session:
            
            return redirect(url_for('auth_views.login'))
        
        response = make_response(f(*args, **kwargs))
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"

        return response

    return decorated_function



@auth_views.route('/')
@login_required
def index():
    return redirect(url_for('auth_views.login'))



@auth_views.route("/login", methods=["GET", "POST"])
def login():

    # user_agent = request.headers.get("User-Agent")
    # print(f'USER AGENT IS {user_agent}')
    # special_substrings = ["BrightSign", "Tizen", "SamsungBrowser", "RoomOS"]

    # if any(substring in user_agent for substring in special_substrings):
    #     session["username"] = "special_user"
    #     return redirect(url_for("admin.search_employee"))

    if request.method == "POST":
        entered_username = request.form["username"]
        set_user(entered_username)
        print("set user"+entered_username)
        entered_password = request.form["password"]
        auth_data = {
            "username": entered_username,
            "password": entered_password,
            "app_id": app_id,
        }

        endpoint = password_portal_url + '/verify-user'

        try:
            external_response = requests.post(endpoint, json=auth_data)
            if external_response.status_code == 200:
                session["username"] = entered_username 
                return redirect(url_for("access.base"))
            else:
                flash("Invalid credentials. Please try again.")
        except Exception as e:
            flash("Internal Server Error", 'error')
            return redirect(url_for("auth_views.login"))

    return render_template("login.html")


@auth_views.route('/reset_password', methods=['POST'])
def reset_password():
    try:
        email = request.form['email']
        api_url = password_portal_url + "/initiate-password-reset"
        headers = {"Content-Type": "application/json"}
        payload = {"email": email, "app_id": app_id}

        response = requests.post(api_url, json=payload, headers=headers)

        if response.status_code == 200:
            flash('Password reset link sent. Please check your email.', 'success')
        else:
            flash('Failed to send password reset link.', 'error')
    except Exception as e:
        flash(str(e), 'error')

    return redirect(url_for('auth_views.login'))



@auth_views.route('/logout', methods=["GET", "POST"])
def logout():

    session.clear()
   
    response = make_response(redirect(url_for('auth_views.login')))
  
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"

    return(response)



# @auth_views.route('/auto_logout', methods=["GET", "POST"])
# def auto_logout():

#     log_action(session["username"], 'logout')

#     session.clear()
#     session['auto_logged_out']=True
   
#     return jsonify('auto_logged_out')

