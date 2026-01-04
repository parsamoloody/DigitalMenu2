# Digital Menu

A modern **Digital Menu Management System** built for restaurant, coffe shop owners. Create, customize, and manage beautiful digital menus with secure authentication — all in one place.
This project follows **Hexagonal Architecture (Ports & Adapters)** to ensure clean separation of concerns, high testability, and easy swapping of infrastructure (e.g., databases, auth providers).

## Features
- User authentication (Signup / Login) with JWT
- Secure password hashing using `bcryptjs`
- Full CRUD operations for Menus/Category/User/Product
- Clean, scalable architecture using Hexagonal pattern
- Prisma ORM with PostgreSQL support
- Type-safe TypeScript implementation

## Tech Stack

| Layer              | Technology                          |  |
|--------------------|--------------------------------------|------|
| Framework          | Next.js (App Router + API Routes)    |  <img src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" width="130" /> |
| Language           | TypeScript                           | <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="130" /> |
| Database           | PostgreSQL + Prisma ORM              | <img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="130" /> |
| Authentication     | JWT + HTTP-only cookies              | <img src="https://jwt.io/img/pic_logo.svg" width="130" /> |
| Password Hashing   | bcryptjs                             | <img src="https://img.icons8.com/ios-filled/50/lock.png" width="100" /> |
| Architecture       | Hexagonal (Ports & Adapters)         | <img src="https://img.icons8.com/ios-filled/50/hexagon.png" width="130" /> |


- **Next.js**: Framework for API routes and server-side logic.
- **Prisma**: ORM for database operations.
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For generating and verifying JWTs.
- **PostgreSQL**: Supported databases via Prisma (configure in `schema.prisma`).
- **Hexagonal Architecture (Ports & Adapters)**: Ensures clean separation between core business logic and external systems such as database, APIs, and UI.

## Setup Instructions
To contribute to this project, follow these steps:

1. **Clone the Repository**:
  Clone the repository and navigate to the `app` directory, which is the root of the server application:
   ```bash
   git clone https://github.com/LightHunters/DigitalMenu2.git
   cd DigitalMenu2/app

2. **Install Dependencies:**:
   install all dependencies
   ```bash
   npm install

3. **Set Up Environment Variables**:
   Create a `.env` file in the `app/` directory and add the following environment variables with your configuration:
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
5. **You can run prisma studio to monitoring**:
   ```bash
   npx prisma studio

## Setup Instructions
------
## User Auth API
## Signup

- Endpoint: POST `/api/auth/signup`
Description: Registers a new user a JWT token stored in a cookie.

- **Request Body:**
   ```json
    {
    "name": "string",
    "email": "string",
    "password": "string"
    }
- **Response 200:**
   ```json
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
   ```json
   {
  "success": false,
  "error": "User already exists"
  }
### Login
- Endpoint: POST `/api/auth/login`
- Description: Authenticates a user (e.g., a restaurant owner) and returns a JWT token stored in a cookie.

- **Request Body:**
   ```json
    {
    "email": "string",
    "password": "string"
    }
- **Response 200:**
   ```json
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
   ```json
     {
    "success": false,
    "message": "user not found"
    }
    ```
## Menu API
### create menu
- Endpoint: POST `/api/menu/craete`
- Description: Creates a new menu document for a user.

- **Request Body:**
   ```json
      {
    "displayId": "shekamoo_220",
    "name": "Italian Food Menu",
    "subname": "Authentic Italian Cuisine",
    "avatar": "https://example.com/menu-avatar.jpg",
    "bio": "A collection of traditional and modern Italian dishes."
     }
    ```
    
- **Error (400/404/500):**
   ```json
     {
    "success": false,
    "message": "user not found"
    }
    ```
### fetch list menus
- Endpoint: GET `/api/menu/list`
- Description: Retrieves a list of all menus.
    
- **Response 200:**
   ```json
     {
  "success": true,
  "data": [
    {
      "props": {
        "id": "cmiyo3jd40001uu58d90l9pfp",
        "displayId": "starbox1-726o",
        "name": "starbox",
        "userId": "cmiyo2zm80000uu58mv8hfy3k",
        "subname": "starbox1",
        "avatar": "https://digifycdn.com/media/item_images/LOGO_E9OxALA.jpg",
        "bio": "dggdfg",
        "connections": null,
        "createdAt": "2025-12-09T14:20:17.993Z",
        "updatedAt": "2025-12-09T14:20:17.993Z"
      }
    },
    {
      "props": {
        "id": "cmj2g4okr0002uu24fx4hbllm",
        "displayId": "yg8goi-2d12",
        "name": "kjnjnjlk",
        "userId": "cmj2g3n6m0001uu241vdpgj4z",
        "subname": "yg8goi",
        "avatar": "https://cdn.topmenumarket.com/storage/category/4456/conversions/thumbnail/image_118499651-thumbnail.webp",
        "bio": "ihyouihoui",
        "connections": null,
        "createdAt": "2025-12-12T05:48:19.179Z",
        "updatedAt": "2025-12-12T05:48:19.179Z"
      }
    },
  ]
  }
### fetch a menu by id
- Endpoint: GET `/api/menu/find-by-id/cmiyo3jd40001uu58d90l9pfp`
- Description: Fetches a single menu record using the provided menu id.
    
- **Response 200:**
   ```json
     {
  "success": true,
  "data": {
    "props": {
      "id": "cmiyo3jd40001uu58d90l9pfp",
      "displayId": "starbox1-726o",
      "name": "starbox",
      "userId": "cmiyo2zm80000uu58mv8hfy3k",
      "subname": "starbox1",
      "avatar": "https://digifycdn.com/media/item_images/LOGO_E9OxALA.jpg",
      "bio": "dggdfg",
      "connections": null,
      "createdAt": "2025-12-09T14:20:17.993Z",
      "updatedAt": "2025-12-09T14:20:17.993Z"
    }
  }
  }

## Category API
## create category
- Endpoint: POST `/api/category/craete`
- Description: Creates a new category document for a menu .

- **Request Body:**
   ```json
      {
    "name": "Pizza",
    "menuId": "your_menu_id",
    "iamge": "https://example.com/pizza.jpg"
      }

- **Error (400/401/404/500):**
   ```json
     {
    "success": false,
    "message": "Unauthorized"
     }

### list all items of a category
- Endpoint: GET `/api/category/list`
- Description: Fetches all category records associated with the menu.

- **Response 200:**
   ```json
      {
  "success": true,
  "data": [
    {
      "id": "cmiyo3uc80002uu58e28vh3i5",
      "menuId": "cmiyo2zm80000uu58mv8hfy3k",
      "name": "fsfsd",
      "image": "https://digifycdn.com/media/item_images/LOGO_E9OxALA.jpg",
      "createdAt": "2025-12-09T14:20:32.216Z",
      "updatedAt": "2025-12-09T14:20:32.216Z"
    },
    {
      "id": "cmiyoht6k0003uu58n7an71d3",
      "menuId": "cmiyo2zm80000uu58mv8hfy3k",
      "name": "this is a category",
      "image": "https://api2.zoomit.ir/media/2017-6-bb0a4b24-020b-4d7d-b3fe-bd39fc7752b6-638ba00ec078cd552de5ebf9?w=1920&q=80",
      "createdAt": "2025-12-09T14:31:23.900Z",
      "updatedAt": "2025-12-09T14:31:23.900Z"
    }
  ]
      }

- **Error (400/401/404/500):**
   ```json
     {
    "success": false,
    "message": "Unauthorized"
    }

### Delete an item of a category
- Endpoint: DELETE `/api/category/delete`
- Description: Deletes a category by its ID.

- **Request Body:**
  ```json
    {
    "id": "cmiypoxyc0004uu58g4bcpncc"
    }

- **Error (400/401/404/500):**
   ```json
     {
    "success": false,
    "message": "Unauthorized"
    }
    
### Update an item of Category
- Endpoint: PATCH `/api/category/update`
- Description: Updates a category by providing partial fields to modify.

- **Request Body:**
  ```json
    {
  "id": "cmiyo3uc80002uu58e28vh3i5",
  "changes": {
    "name": "New Category Name",
    "image": "https://new-image-url.com/img.jpg",
  }
   }
  ```

- **Error (400/401/404/500):**
   ```json
     {
    "success": false,
    "message": "Unauthorized"
    }
  ```


    ## Menu Management (Examples)
    ### create menu
    example of crate menu
    ```javascript
    // 1. Create the database repository
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
    const menuRepo = new MenuDatabaseMenuRepository(prisma);
    const findMenu = new FindMenuByIdUseCase(menuRepo);
    const menu = await findMenu.execute("menu-id-here");

    if (menu) console.log("Found:", menu.name, menu.connections?.location);
    ```
    ### Read – List All Menus
    ```js
    const menuRepo = new MenuDatabaseMenuRepository(prisma);
    const listMenus = new ListMenusUseCase(menuRepo);
    const allMenus = await listMenus.execute();

    allMenus.forEach(m => {
    console.log(`${m.name} → ${m.displayId}`);
    });
    ```

## Contributors

<table>
<tr>
  <td align="center">
    <a href="https://github.com/elliotWoas">
      <img src="https://avatars.githubusercontent.com/u/106772247?v=4" width="80px" style="border-radius:50%" />
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/parsamoloody">
      <img src="https://avatars.githubusercontent.com/u/152327686?s=400&u=eb64df54e3bb550335aa0f9986f158a0ce78a26a&v=4" width="80px" style="border-radius:50%" />
    </a>
  </td>
  <td align="center">
    <a href="https://github.com/lhaniyehamiril">
      <img src="http://avatars.githubusercontent.com/u/215504753?v=4" width="80px" style="border-radius:50%" />
    </a>
  </td>
</tr>
</table>

