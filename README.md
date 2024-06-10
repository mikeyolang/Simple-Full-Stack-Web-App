# Simple Full Stack Web App with Node.js and MongoDB

This is a basic full-stack application using Node.js, Express, MongoDB for the server side, and HTML/CSS for the client side. The application allows you to create users and store them in a MongoDB database.


## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mikeyolang/Simple-Full-Stack-Web-App.git
    cd simple-server
    ```

2. **Set up the server:**

    ```bash
    cd server
    npm install
    ```

3. **Create a `.env` file in the `server` directory:**

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/simple-server
    ```

4. **Start the server:**

    ```bash
    node server.js
    ```

### Project Structure

- **public/**: Contains the static files for the client side (HTML, CSS, JavaScript).
- **server/**: Contains the server-side code (models, routes, server configuration).

### Server

The server is built with Node.js and Express and connects to a MongoDB database.

#### server.js

The main server file. Sets up the Express app, connects to MongoDB, and serves the static files.

#### models/User.js

Defines the User model schema for MongoDB.

#### routes/userRoutes.js

Contains the API routes for creating users.

### Client

The client is built with plain HTML, CSS, and JavaScript. It allows users to create a new user by submitting a form.

#### public/index.html

The main HTML file for the client side.

#### public/css/styles.css

Contains the styles for the client side.

#### public/js/script.js

Contains the JavaScript code for handling form submission and making requests to the server.

### Usage

1. **Open your browser and navigate to `http://localhost:5000`.**
2. **Fill out the form to create a new user.**
3. **Submit the form to create a user in the MongoDB database.**



### Acknowledgments

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node.js](https://nodejs.org/)


