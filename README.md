# Digital Menu

# Digital Menu

A modern **Digital Menu Management System** built for restaurant owners. Create, customize, and manage beautiful digital menus with secure authentication — all in one place.

This project follows **Hexagonal Architecture (Ports & Adapters)** to ensure clean separation of concerns, high testability, and easy swapping of infrastructure (e.g., databases, auth providers).

## Features
- User authentication (Signup / Login) with JWT
- Secure password hashing using `bcryptjs`
- Full CRUD operations for Menus
- Unique `displayId` validation
- Clean, scalable architecture using Hexagonal pattern
- Prisma ORM with PostgreSQL support
- Type-safe TypeScript implementation

## Tech Stack
| Layer              | Technology                          |
|--------------------|-------------------------------------|
| Framework          | Next.js (App Router + API Routes)   |
| Language           | TypeScript                          |
| Database           | PostgreSQL + Prisma ORM             |
| Authentication     | JWT + HTTP-only cookies             |
| Password Hashing   | bcryptjs                            |
| Architecture       | Hexagonal (Ports & Adapters)        |


## Table of Contents
- [Digital Menu](#digital-menu)
- [Digital Menu](#digital-menu-1)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Tech Stack](#tech-stack-1)
  - [Setup Instructions](#setup-instructions)
    - [Read – Get One Menu](#read--get-one-menu)
    - [Read – List All Menus](#read--list-all-menus)
    - [Update a Menu](#update-a-menu)
    - [Delete a Menu](#delete-a-menu)

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
    ```
    ## Menu Management (CRUD Examples)
    ### create menu
    example of crate menu
    ```javascript
    const menuRepo = new MenuDatabaseMenuRepository(prisma);

   // 2. Create the use case
   const createMenu = new CreateMenuUseCase(menuRepo);

   // 3. Create your menu - it's that simple!
   await createMenu.execute({
   displayId: "my-restaurant-2025",
   name: "Shekamoo Haa", // Farsi
   subname: "Shekamooo", // English
   avatar: "https://i.imgur.com/zBsQPCb_d.webp?maxwidth=520&shape=thumb&fidelity=high",
   bio: "Welcome to our delicious menu!",
   categories: ["cmij4jihi0008uujstkda5j85", "lkoopjihiu666uujstkd85y21"],
   connections: {
    socialMedias: {
      instagram: "bellaitalia_restaurant",
      facebook: "bellaitalia",
      tiktok: "bellaitalia_official"
    },
    openTimes: [
      { day: "Monday", open: "11:00", close: "22:00" },
      { day: "Tuesday", open: "11:00", close: "22:00" },
      { day: "Wednesday", open: null,  close: null },
      { day: "Thursday", open: "11:00", close: "23:00" },
      { day: "Friday", open: "11:00", close: "00:00" },
      { day: "Saturday", open: "10:00", close: "00:00" },
      { day: "Sunday", open: "10:00", close: "21:00" }
    ],
    location: "123 Main St, Downtown, New York, USA",
    contacts: [
      { type: "phone", title: "phone", destination: "+1 (555) 123-4567" },
      { type: "email", title: "email", destination: "hello@bellaitalia.com" },
      { type: "website", title: "our website", destination: "https://bellaitalia.com" }
    ]
  }
   });
   ```

### Read – Get One Menu
```js
const findMenu = new FindMenuByIdUseCase(menuRepo);
const menu = await findMenu.execute("menu-id-here");

if (menu) console.log("Found:", menu.name, menu.connections?.location);
```
### Read – List All Menus
```js
const listMenus = new ListMenusUseCase(menuRepo);
const allMenus = await listMenus.execute();

allMenus.forEach(m => {
  console.log(`${m.name} → ${m.displayId}`);
});
```
### Update a Menu
```js
const updateMenu = new UpdateMenuUseCase(menuRepo);

await updateMenu.execute("menu-id-here", {
  bio: "Now serving gluten-free options!",
  "connections.openTimes": [
    { day: "Wednesday", open: "17:00", close: "22:00" } // Now open on Wednesday!
  ],
  "connections.contacts": [
    { type: "whatsapp", value: "+15559876543" }
  ]
});
```

### Delete a Menu
```js
const deleteMenu = new DeleteMenuUseCase(menuRepo);
await deleteMenu.execute("menu-id-to-remove");

console.log("Menu deleted successfully");
```