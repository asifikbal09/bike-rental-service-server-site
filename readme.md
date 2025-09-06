# Bike Rental Service

A **Bike Rental Service** API built with **TypeScript, Express.js, and MongoDB** for managing bike rentals.

## 🚀 Features
- User authentication with **JWT**
- Bike management (Add, Update, Delete, List)
- Booking system for renting bikes
- Profile management

## 🛠️ Technologies Used
- **Backend:** TypeScript, Express.js, Mongoose (MongoDB)
- **Authentication:** JWT, bcrypt
- **Validation:** Zod
- **Error Handling:** HTTP status codes
- **Development Tools:** ESLint, Prettier, ts-node-dev

---

## 🏗️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/asifikbal09/bike-rental-service.git
cd bike-rental-service
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
```sh
touch .env
```
Add the following environment variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bike-rental
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Project
#### Development Mode:
```sh
npm run start:dev
```
#### Production Mode:
```sh
npm run build && npm run start:prod
```

---

## 📌 API Documentation

### 🔹 **Authentication**

#### ✅ Sign Up
- **Endpoint:** `POST /api/auth/signup`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890",
  "address": "123 Main St",
  "role": "admin"
}
```
- **Response:**
```json
{
  "message": "User registered successfully"
}
```

#### ✅ Log In
- **Endpoint:** `POST /api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "token": "your_jwt_token"
}
```

### 🔹 **User Management**

#### ✅ Get Profile
- **Endpoint:** `GET /api/users/me`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Main St"
}
```

#### ✅ Update Profile
- **Endpoint:** `PUT /api/users/me`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
```json
{
  "phone": "9876543210"
}
```
- **Response:**
```json
{
  "message": "Profile updated successfully"
}
```

### 🔹 **Bike Management**

#### ✅ Add Bike (Admin Only)
- **Endpoint:** `POST /api/bikes`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
```json
{
  "name": "Yamaha MT-15",
  "description": "A powerful sports bike.",
  "pricePerHour": 15,
  "cc": 150,
  "year": 2022,
  "model": "MT-15",
  "brand": "Yamaha"
}
```
- **Response:**
```json
{
  "message": "Bike added successfully"
}
```

#### ✅ Get All Bikes
- **Endpoint:** `GET /api/bikes`
- **Response:**
```json
[
  {
    "id": "bike1",
    "name": "Yamaha MT-15",
    "pricePerHour": 15
  }
]
```

#### ✅ Update Bike (Admin Only)
- **Endpoint:** `PUT /api/bikes/:id`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
```json
{
  "pricePerHour": 20
}
```
- **Response:**
```json
{
  "message": "Bike updated successfully"
}
```

#### ✅ Delete Bike (Admin Only)
- **Endpoint:** `DELETE /api/bikes/:id`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
```json
{
  "message": "Bike deleted successfully"
}
```

### 🔹 **Rental System**

#### ✅ Rent a Bike
- **Endpoint:** `POST /api/rentals`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Body:**
```json
{
  "bikeId": "bike1",
  "startTime": "2024-08-16T09:00:00Z"
}
```
- **Response:**
```json
{
  "message": "Bike rental created successfully"
}
```

---

## 📝 Notes
- Ensure MongoDB is running before starting the project.
- Use **Postman** or any API testing tool to test the endpoints.

---

## 🤝 Contribution
Feel free to fork this repo and submit pull requests! 😊

---
