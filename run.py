from app import create_app
from dotenv import load_dotenv

load_dotenv()
 
app = create_app()
 
if __name__ == "__main__":
    # Bind to 0.0.0.0, will make accessible from any machine on network
    app.run(host='0.0.0.0', port=3004, debug=True)