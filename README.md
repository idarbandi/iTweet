<div align="center">

# iTweet

**Revolutionizing Social Media Interaction with Django and React**

**Author:** idarbandi  
**Email:** [darbandidr99@gmail.com](mailto:darbandidr99@gmail.com)  
**GitHub:** [idarbandi](https://github.com/idarbandi)

---

</div>

Welcome to the iTweet project! iTweet is an innovative platform designed to enhance social media interactions by leveraging the power of Django for backend development and React for frontend development. This project offers a seamless and interactive user experience, making it easier to share and engage with content.

## 🚀 Key Features

### 1. Real-time Tweet Updates
The core feature of iTweet is its real-time tweet updates, powered by WebSocket connections. This ensures that users receive the latest tweets instantly, providing a dynamic and engaging platform.

### 2. User Authentication
iTweet includes robust user authentication with JWT tokens, ensuring secure access and interactions. Users can register, log in, and manage their profiles with ease.

### 3. Efficient Tweet Management
iTweet efficiently manages tweets, likes, and comments using Django's ORM. Users can easily create, update, and delete their tweets, as well as engage with others' content through likes and comments.

### 4. Custom Middleware for Security
The custom JWT middleware enhances security by authenticating WebSocket connections using JWT tokens. This middleware extracts tokens from cookies, verifies them, and attaches authenticated user information to the WebSocket scope.

### 5. Comprehensive Validation
Robust validation functions ensure the integrity of content shared on the platform. These functions check for appropriate formats and standards, maintaining the platform's quality and reliability.

### 6. Structured Models
iTweet includes well-defined models for managing users, tweets, likes, and comments. Each model comes with clear attributes and relationships, supporting robust data management and enhancing readability.

### 7. API Documentation
Using **drf_spectacular**, iTweet provides comprehensive API documentation. The **extend_schema** decorator defines the responses and parameters for API endpoints, ensuring clear and user-friendly documentation.

## 📈 Conclusion
The iTweet project sets a new standard for social media platforms by combining real-time interaction capabilities, robust data management, advanced security features, and comprehensive validation. This project is a testament to the power of modern web development frameworks and offers a scalable and secure solution for social media interaction.

## 🛠️ Get Started
Follow the steps below to set up and run the iTweet project on your local machine.

### Prerequisites
- Python 3.7+
- Django 3.2+
- Channels 3.0+
- Node.js and npm (for React)
- PostgreSQL

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/idarbandi/iTweet.git
    ```

2. Navigate to the project directory:
    ```bash
    cd iTweet
    ```

3. Backend Setup:
    - Create a virtual environment:
      ```bash
      python3 -m venv env
      source env/bin/activate
      ```
    - Install the required packages:
      ```bash
      pip install -r requirements.txt
      ```
    - Set up the database:
      ```bash
      python manage.py migrate
      ```
    - Create a superuser:
      ```bash
      python manage.py createsuperuser
      ```

4. Frontend Setup:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```
    - Install the required packages:
      ```bash
      npm install
      ```
    - Start the React development server:
      ```bash
      npm start
      ```

5. Run the backend server:
    ```bash
    python manage.py runserver
    ```

6. Open your browser and navigate to `http://127.0.0.1:8000/` for the Django backend and `http://localhost:3000/` for the React frontend.

### 📖 Usage
To start using the iTweet platform, log in with your user credentials and start tweeting, liking, and commenting!

### 🤝 Contributions
Contributions are welcome! Please fork the repository and submit a pull request.

### 📜 License
This project is licensed under the MIT License.

---

Happy coding! If you encounter any issues or have any questions, feel free to open an issue or contact me at [darbandidr99@gmail.com](mailto:darbandidr99@gmail.com).

