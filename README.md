# Digital Menu

This project is a Next.js application implementing user authentication with login and signup APIs. The authentication system uses JWT (JSON Web Tokens) for secure session management, Prisma for database interactions

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Authentication APIs](#authentication-apis)
  - [Signup API](#signup-api)
  - [Login API](#login-api)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [Environment Variables](#environment-variables)
- [Error Handling](#error-handling)

## Project Overview
This application enables restaurant owners to create and manage digital menus for their establishments. Users can sign up, log in, and build customized menus with items, prices, and descriptions. The authentication system ensures secure access to menu management features. The codebase follows a clean architecture pattern with:
- **Business logic**: still not completed.

## Tech Stack
- **Next.js**: Framework for API routes and server-side logic.
- **Prisma**: ORM for database operations.
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For generating and verifying JWTs.
- **PostgreSQL**: Supported databases via Prisma (configure in `schema.prisma`).

## Setup Instructions
To contribute to this project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/LightHunters/DigitalMenu2.git
   cd DigitalMenu2/app

2. **Install Dependencies:**:
   ```bash
   npm install

3. **Set Up Environment Variables::**:
   ```bash
   DATABASE_URL="your-database-connection-string"
   JWT_SECRET="your-jwt-secret-key"
   TOKEN_NAME="token"

- DATABASE_URL: Connection string for your database (e.g., PostgreSQL).
- JWT_SECRET: A secure key for signing JWTs (e.g., a random string).
- TOKEN_NAME: Name of the cookie storing the JWT (e.g., auth_token).

4. **Set Up Prisma:**:
   ```bash
   npx prisma generate
   npx prisma migrate dev

5. **Run the Development Server**:
   ```bash
   npm run dev

## Setup Instructions
### Signup API

- Endpoint: POST `/api/auth/signup`
Description: Registers a new user a JWT token stored in a cookie.

- **Request Body:**
   ```bash
    {
    "name": "string",
    "email": "string",
    "password": "string"
    }
- **Response 200:**
   ```bash
    {
  "success": true,
  "data": {
    "user": {
      "id": "string",
      "name": "string",
      "email": "string",
      "createdAt": "string",
      "updatedAt": "string"
    },
    "token": "string"
          }
    }

- **Error (400/500):**
   ```bash
   {
  "success": false,
  "error": "User already exists"
  }

### Login API
- Endpoint: POST `/api/auth/login`
- Description: Authenticates a user (e.g., a restaurant owner) and returns a JWT token stored in a cookie.

- **Request Body:**
   ```bash
    {
    "email": "string",
    "password": "string"
    }
- **Response 200:**
   ```bash
    {
  "success": true,
  "data": {
    "user": {
      "id": "string",
      "name": "string",
      "email": "string",
      "createdAt": "string",
      "updatedAt": "string"
    },
    "token": "string"
          }
     }

- **Error (400/404/500):**
   ```bash
     {
    "success": false,
    "message": "user not found"
    }