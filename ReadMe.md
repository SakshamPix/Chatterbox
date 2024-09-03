# ChatterBox - Real-Time Chat Application

## Overview

ChatterBox is a real-time chat application that facilitates instant communication between users through seamless WebSocket connections powered by Socket.io. The application features a robust Node.js and Express backend with a modern, component-based React.js frontend that provides a dynamic and responsive user experience.

## Features

- **Real-Time Messaging**: Enables instant communication between users with real-time message updates using Socket.io.
- **Scalable Backend**: Built on Node.js and Express, ensuring efficient handling of real-time data and multiple concurrent connections.
- **Modern React Frontend**: A fully responsive and modular UI built with React.js, providing a dynamic and intuitive chat experience across devices.
- **Chat Rooms**: Supports multiple chat rooms or private messaging between users.
- **Real-Time Notifications**: Provides real-time notifications for new messages.
- **Responsive Design**: Optimized for both desktop and mobile use, ensuring a smooth user experience on all devices.

## Technology Stack

### Backend
- **Node.js**: JavaScript runtime used for the backend server.
- **Express.js**: Web application framework for handling routing, middleware, and API endpoints.
- **Socket.io**: Library for real-time, bidirectional communication between web clients and servers.

### Frontend
- **React.js**: JavaScript library for building user interfaces, leveraging component-based architecture for a modular and maintainable codebase.
- **Axios**: Promise-based HTTP client for making API requests to the backend.
- **CSS/SCSS**: Styling the application with modular and responsive design principles.

## Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine (v14.x or later recommended).
- **npm**: Node package manager (comes with Node.js) for managing dependencies.

## Installation and Running the Application

1. **Install Backend Dependencies**:

    ```bash
    cd server
    npm install
    ```

2. **Install Frontend Dependencies**:

    ```bash
    cd ../client
    npm install
    ```

3. **Run the Application**:

    - **Backend**:

        ```bash
        cd server
        npm start
        ```

    - **Frontend**:

        ```bash
        cd ../client
        npm start
        ```

4. **Access the Application**:

    Open your browser and navigate to [http://localhost:4000](http://localhost:4000) to use the ChatterBox application.

## Project Structure

### Backend (`/server`)

- **`/controllers`**: Handles the application logic for various routes.
- **`/routes`**: Defines API routes for handling requests.
- **`/sockets`**: Manages WebSocket connections using Socket.io.

### Frontend (`/client`)

- **`/src/components`**: Reusable React components (e.g., ChatWindow, MessageInput).
- **`/src/pages`**: Page-level components (e.g., Home, ChatRoom).
- **`/src/context`**: React Context for managing global state (e.g., chat state).
- **`/src/services`**: API service functions using Axios for communicating with the backend.
- **`/src/styles`**: CSS/SCSS files for styling the components.

## Key Features

### Real-Time Messaging

The application enables real-time, bidirectional communication using Socket.io, allowing users to send and receive messages instantly.

### Chat Rooms

Support for multiple chat rooms or private one-on-one messaging, with real-time updates and notifications for new messages.

### Notifications

Real-time notifications inform users of new messages and updates, enhancing the user experience.

## Future Improvements

- **Media Sharing**: Add functionality for users to share images, videos, and files within chat rooms.
- **Typing Indicators**: Show real-time indicators when other users are typing a message.
- **Message Reactions**: Allow users to react to messages with emojis or other icons.
- **Push Notifications**: Implement push notifications for new messages when the user is not actively using the app.

## Acknowledgements

- **Socket.io**: For enabling real-time communication in the application.
- **React.js**: For providing a robust framework for building the frontend UI.
- **Express.js**: For creating a simple yet powerful backend.

