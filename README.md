# JWT Authentication Starter

![JWT Authentication](https://miro.medium.com/v2/resize:fit:743/1*dm00QProOdGxcV9gv0RX_w.png)

## Overview

This repository provides a comprehensive implementation of JWT authentication using Node.js, Express, and MySQL. The project showcases best practices in user registration, login, token-based authentication, and protected routes, all while maintaining robust error handling and logging mechanisms.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Contributing](#contributing)
- [License](#license)
- [Links](#-links)

## Features

- **User Registration**: Secure user registration with bcrypt password hashing.
- **User Login**: JWT token generation for authenticated users.
- **Protected Routes**: Middleware-enforced JWT protection for sensitive routes.
- **Error Handling**: Centralized error management with detailed logging using Winston.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Logging**: Winston
- **Environment Management**: dotenv

## Prerequisites

Ensure you have the following installed and configured on your machine:

- **Node.js**: Version 14 or higher. [Download here](https://nodejs.org/).
- **MySQL**: MySQL server or a compatible database. [Download here](https://dev.mysql.com/downloads/mysql/).

For installation assistance, refer to the official documentation or guides.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AchrefDevTN/jwt-auth-starter.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd jwt-auth-starter
   ```
  
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Create a .env file in the root directory:**
   (Copy the contents below and configure your environment variables)
  
   ```ini
   PORT=5000
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRATION=1h
   DB_USERNAME=root
   DB_PASSWORD=your_db_password
   DB_NAME=jwt_auth_db
   DB_HOST=localhost
   ```

5. **Run the application:**
   - For development
   ```bash
   npm run dev
   ```
   - For production
   ```bash
   npm start
   ```

6. **Access the API:**
   - The server will be running on
   ```bash
   http://localhost:5000
   ```



## API Endpoints

- **POST `/api/auth/register`**  
  Registers a new user.  
  **Request body:**  
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
  **Response:**  
  ```json
  {
     "message": "User registered successfully"
  }
  ```
  
- **POST `/api/auth/login`**  
  Logs in a user and returns a JWT token.  
  **Request body:**  
  ```json

  {
    "username": "string",
    "password": "string"
  }
  ```

  **Response:**  
  ```json

  {
    "token": "jwt_token_string"
  }
  ```

- **GET `/api/auth/protected`**  
  Access a protected route (JWT required in the Authorization header).  
  **Response:**      
  ```json
  {
    "message": "This is a protected route",
    "userId": "user_id"
  }
  ```


## Error Handling
Errors are handled centrally in the middleware. If an error occurs, the server responds with an appropriate status code and message. All errors are logged using Winston for debugging and monitoring purposes.

## Logging
The application uses Winston for logging. Logs are written to both the console and a file named <kbd>app.log</kbd>.

## Contributing
If you have suggestions or improvements, please submit an issue or pull request. Contributions are welcome!

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/AchrefDevTN/jwt-auth-starter/blob/main/LICENSE) file for details.

## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)]([https://www.linkedin.com/](https://www.linkedin.com/in/achref-ben-brahim-dev/))


| Node.js | Express | MySQL | License |
|---------|---------|-------|---------|
| [![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green)](https://nodejs.org/) | [![Express](https://img.shields.io/badge/Express-v4.18.2-blue)](https://expressjs.com/) | [![MySQL](https://img.shields.io/badge/MySQL-v8.0%2B-blue)](https://www.mysql.com/) | [![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/AchrefDevTN/jwt-auth-starter/blob/main/LICENSE) |




