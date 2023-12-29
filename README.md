# Firebase/Node/Express/TypeScript CRUD Server

This project is a CRUD (Create, Read, Update, Delete) server built with Firebase, Node.js, Express, and TypeScript. It provides endpoints for client applications to interact with and also includes a well-detailed Swagger documentation for easy usage.

## URL

https://firebase-be.onrender.com/api-docs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm/yarn
- Firebase account

### Installing

1. Clone the repository: `git clone https://github.com/todak2000/firebase_be.git`
2. Navigate into the project directory: `cd firebase_be`
3. Install the dependencies: `yarn install`
4. Set up your Firebase configuration in a `.env` file.

```
PORT=5000
HOST=localhost
HOST_URL=http://localhost:5000

#firebase config
API_KEY=<your-api-key>
AUTH_DOMAIN=<your-auth-domain>
PROJECT_ID=<your-project-id>
STORAGE_BUCKET=<your-storage-bucket>
MESSAGING_SENDER_ID=<your-messaging-sender-id>
APP_ID=<your-app-id>

```

5. Compile the TypeScript code: `npm run build`
6. Start the server in development mode: `yarn dev`

## Usage

The server provides the following endpoints:

- `GET /`: Home route
- `POST /users`: Create a new user
- `GET /users/:id`: Get a user by ID
- `PUT /users/:id`: Update a user by ID
- `DELETE /users/:id`: Delete a user by ID

## API Documentation

The API documentation is provided by Swagger and is available at `/api-docs`.

## Running the Tests

To run the tests, use the command: `yarn test`

## Built With

- Firebase - The database used
- Node.js - The runtime used
- Express - The web framework used
- TypeScript - The language used

## Author

[Daniel Olagunju](https://github.com/todak2000)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
