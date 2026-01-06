# In-Memory CRUD API with Node.js & Express

This is a simple REST API built with **Node.js and Express** that performs basic **CRUD operations** (Create, Read, Update, Delete) using an **in-memory data structure** instead of a database.

My goal in this project is to demonstrate how a backend API works internally: routing, controllers, middleware, error handling, and clean project structure.

---

## 🚀 Features

- Full CRUD operations on users
- In-memory data storage (no database required)
- Centralized error handling middleware
- Clean MVC-like structure (Routes, Controllers, Middleware)
- JSON request/response handling
- Environment variable support with `dotenv`

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- dotenv

---

## 📌 User Data Structure

Each user contains:

- **id** (Number or String)
- **name** (String)
- **age** (Number)

All data is stored in memory, meaning it resets when the server restarts.

---

## 🔗 API Endpoints

Base route:

- `GET /api/users` → Get all users  
- `GET /api/users/:id` → Get a user by ID  
- `POST /api/users` → Create a new user  
- `PUT /api/users/:id` → Update a user  
- `DELETE /api/users/:id` → Delete a user  

