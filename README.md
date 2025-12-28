# 👤 In-Memory Users CRUD API

This project is a simple **CRUD REST API** built with **Node.js and Express**, using an **in-memory data store** instead of a database.

It was created to practice the basics of REST APIs, routing, controllers, and request handling in Express without the complexity of a real database.

---

## 🚀 Features

- Full CRUD operations for users
- In-memory data storage (no database required)
- RESTful routes with Express
- Simple and clear project structure
- JSON request and response handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📂 Project Structure

├── config
│ └── connectionDB.js
├── controller
│ └── userController.js
├── routes
│ └── routes.js
├── server.js

---

## 📌 User Data Structure

Each user contains:

- **id** (Number or String)
- **username** (String)
- **age** (Number)

All data is stored in memory, meaning it resets when the server restarts.

---

## 🔗 API Endpoints

Base route:

- `GET /users` → Get all users  
- `GET /users/:id` → Get a user by ID  
- `POST /users` → Create a new user  
- `PUT /users/:id` → Update a user  
- `DELETE /users/:id` → Delete a user  

