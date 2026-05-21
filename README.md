# Full-Stack Student Courses App

A full-stack student courses application with an Angular frontend and a Node.js backend. The project implements authentication, course and category management, ordering, and user profile features for a simple online learning marketplace.

---

## Tech Stack

- **Frontend:** Angular (TypeScript)
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **Dev tools:** npm, nodemon / Angular CLI

---

## Repository Structure

- **server/**: Express API and server-side code ([server/package.json](server/package.json#L1))
- **StudentApp/**: Angular frontend application ([StudentApp/package.json](StudentApp/package.json#L1))

---

## Quick Start (Development)

1. Clone the repo

   ```bash
   git clone https://github.com/MahmoudMostafa11199/student-app.git
   cd student-app
   ```

2. Backend

- Install dependencies

  ```bash
  cd server
  npm install
  ```

- Create a `.env` file in `server/` with the required environment variables (see Environment Variables below).

- Start the server (development):

  ```bash
  npm run dev
  ```

3. Frontend

- Install dependencies and start Angular dev server

  ```bash
  cd StudentApp
  npm install
  npm start
  # OR using Angular CLI
  # ng serve --open
  ```

Open the Angular app (usually at `http://localhost:4200`) and the API (commonly `http://localhost:5000`) in your browser.

---

## Environment Variables

Place server environment variables in `server/.env`.

- **MONGO_URI**: MongoDB connection string (e.g. `mongodb://localhost:27017/student-app`)
- **PORT**: Port for the Node server (e.g. `2210`)
- **JWT_SECRET**: Secret key used to sign JWT tokens
- **NODE_ENV**: `development` or `production`

Frontend configuration

- The Angular app uses `src/environments/environment.ts` and `src/environments/environment.development.ts` to store environment-specific values. Set the API base URL there (for example `API_BASE_URL: 'http://localhost:2210/api'`).

---

## Seed Data

- There is a `seed/` folder under `server/` that can be used to populate the database with initial data. Check `server/seed/seed.js` and run it with Node (or use any provided npm script):

  ```bash
  cd server
  node seed/seed.js
  # or possibly
  # npm run seed
  ```

---

## Features

- **Authentication:** register, login, JWT-based auth
- **Courses:** create, read, update, delete courses
- **Categories:** manage course categories
- **Orders:** place and manage course purchases/orders
- **Users:** user profiles and role-based access (where applicable)
- **Seed data & images:** example course images are stored in `StudentApp/public` for demo purposes

---

## API Overview

Typical API endpoints (see route files in `server/routes/`):

- `POST /api/auth/register` — register new user ([server/routes/authRoutes.js](server/routes/authRoutes.js#L1))
- `POST /api/auth/login` — login and receive JWT
- `GET /api/categories` — list categories ([server/routes/categoryRoutes.js](server/routes/categoryRoutes.js#L1))
- `GET /api/courses` — list courses ([server/routes/courseRoutes.js](server/routes/courseRoutes.js#L1))
- `POST /api/orders` — create an order ([server/routes/orderRoutes.js](server/routes/orderRoutes.js#L1))
- `GET /api/users` — user operations ([server/routes/userRoutes.js](server/routes/userRoutes.js#L1))

Refer to the controllers in `server/controllers/` for request/response details.

---

## Troubleshooting

- If the server fails to start, check the `.env` values and confirm MongoDB is reachable.
- Check `server/logs` or console output for stack traces (or add logging where helpful).

---

## Author

Mahmoud Mostafa
