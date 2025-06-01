# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from datetime import datetime

# Initialize the FastAPI application
app = FastAPI(
    title="Mohit's Portfolio Backend",
    description="Backend services for Mohit Kumar's personal portfolio, serving dynamic content and handling contact form submissions.",
    version="1.0.0"
)

# Configure CORS (Cross-Origin Resource Sharing)
# This is crucial to allow your React frontend (running on a different origin/port)
# to make requests to this FastAPI backend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. In production, replace "*" with your frontend's URL (e.g., "http://localhost:3000", "https://yourportfolio.com")
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"], # Or specify only methods you need
    allow_headers=["*"], # Allows all headers
)

# Define a Pydantic model for the About data structure
class AboutContent(BaseModel):
    title: str
    content: str
    # You could add more fields here like 'skills', 'experience', etc.

# Define a Pydantic model for the Contact Form data structure
class ContactForm(BaseModel):
    name: str
    email: EmailStr # Use EmailStr for email validation
    message: str

# Define the endpoint to get About Me content
@app.get("/about", response_model=AboutContent, summary="Get About Me Content")
async def get_about_content():
    """
    Retrieves the static 'About Me' content for the portfolio.
    This can be easily updated here without changing frontend code.
    """
    about_data = {
        "title": "About Me",
        "content": "I'm Mohit, a passionate cybersecurity enthusiast and software developer. I love building tools that secure, automate, and enhance user experience. With a background in cybersecurity, web development, and data analysis, I strive to create meaningful digital solutions."
    }
    return AboutContent(**about_data)

# Define the endpoint to handle Contact Form submissions
@app.post("/contact", summary="Submit Contact Form")
async def submit_contact_form(form_data: ContactForm):
    """
    Receives and processes contact form submissions.
    In a real application, this would save to a database, send an email, etc.
    For this example, it will print the data to the console and return a success message.
    The response will indicate that the message is directed to mohitk.dev@gmail.com.
    """
    try:
        # Log the received data (for demonstration purposes)
        print(f"Received contact form submission at {datetime.now()}:")
        print(f"  Name: {form_data.name}")
        print(f"  Email: {form_data.email}")
        print(f"  Message: {form_data.message}")
        print(f"  (This message is conceptually directed to mohitk.dev@gmail.com)")


        # In a real application, you would integrate with a database (e.g., MongoDB, PostgreSQL)
        # or an email service (e.g., SendGrid, Mailgun) here.
        # Example: save_to_database(form_data)
        # Example: send_email_notification(form_data, recipient_email="mohitk.dev@gmail.com")

        return {"message": "Contact form submitted successfully! Your message is directed to mohitk.dev@gmail.com.", "status": "success"}
    except Exception as e:
        # Log the error for debugging
        print(f"Error processing contact form submission: {e}")
        # Raise an HTTP exception for the client
        raise HTTPException(status_code=500, detail="Internal server error. Failed to process message.")


# Example: A simple root endpoint
@app.get("/", summary="Root Endpoint")
async def read_root():
    return {"message": "Welcome to Mohit's Portfolio Backend! Access /about for content and POST to /contact for form submissions."}

# To run this FastAPI application:
# 1. Save the code as main.py
# 2. Open your terminal in the same directory
# 3. Run: uvicorn main:app --reload --port 8000
#    --reload will automatically restart the server on code changes.
#    --port 8000 will run it on port 8000. You can change this if needed.
