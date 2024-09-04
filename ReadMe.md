# ChatterBox - Real-Time Chat Application

## Overview

ChatterBox is a real-time chat application that facilitates instant communication between users through seamless WebSocket connections powered by Socket.io. The application features a robust Node.js and Express backend with a clean and efficient frontend built using EJS templates, providing a dynamic and responsive user experience.

## Features

- **Real-Time Messaging**: Enables instant communication between users with real-time message updates using Socket.io.
- **Scalable Backend**: Built on Node.js and Express, ensuring efficient handling of real-time data and multiple concurrent connections.
- **EJS Templating**: A server-side rendered UI built with plain EJS, providing fast and reliable page rendering for a smooth chat experience across devices.
- **Chat Rooms**: Supports multiple chat rooms or private messaging between users.
- **Real-Time Notifications**: Provides real-time notifications for new messages.
- **Responsive Design**: Optimized for both desktop and mobile use, ensuring a smooth user experience on all devices.

## Technology Stack

### Backend
- **Node.js**: JavaScript runtime used for the backend server.
- **Express.js**: Web application framework for handling routing, middleware, and API endpoints.
- **Socket.io**: Library for real-time, bidirectional communication between web clients and servers.

### Frontend
- **EJS**: Embedded JavaScript templates for server-side rendering.
- **CSS**: Styling the application with responsive design principles.

## Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine (v14.x or later recommended).
- **npm**: Node package manager (comes with Node.js) for managing dependencies.

## Installation and Running the Application

1. **Install Dependencies**:

    ```bash
    npm install
    ```

2. **Run the Application**:

    ```bash
    npm start
    ```

3. **Access the Application**:

    Open your browser and navigate to [http://localhost:4000](http://localhost:4000) to use the ChatterBox application.

## Project Structure

### Backend

- **`/controllers`**: Handles the application logic for various routes.
- **`/routes`**: Defines API routes for handling requests.
- **`/sockets`**: Manages WebSocket connections using Socket.io.
- **`/views`**: Contains the EJS templates for rendering the frontend.

### Frontend (EJS Templates)

- **`/views`**: EJS templates that render pages such as ChatWindow and MessageInput directly on the server-side.
- **`/public`**: Static files like CSS and client-side JavaScript for styling and enhancing interactivity.

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
- **EJS**: For providing a simple yet effective templating system.
- **Express.js**: For creating a simple yet powerful backend.
