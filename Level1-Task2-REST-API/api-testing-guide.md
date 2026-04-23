# REST API Testing Guide

## 🎯 Task Objective
Develop a simple REST API using Node.js with Express and implement basic CRUD operations on user resources.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd Level1-Task2-REST-API
npm install
```

### 2. Set Up Environment
```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your MongoDB URI
MONGODB_URI=mongodb://localhost:27017/user_management
PORT=3000
NODE_ENV=development
```

### 3. Start MongoDB
```bash
# Windows
net start MongoDB

# Or start MongoDB service manually
```

### 4. Start Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000
```

### Users API Endpoints

| Method | Endpoint | Description | Example |
|--------|----------|-------------|---------|
| GET | `/api/users` | Get all users | `curl http://localhost:3000/api/users` |
| GET | `/api/users/:id` | Get single user | `curl http://localhost:3000/api/users/USER_ID` |
| POST | `/api/users` | Create new user | `curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","age":25}'` |
| PUT | `/api/users/:id` | Update user | `curl -X PUT http://localhost:3000/api/users/USER_ID -H "Content-Type: application/json" -d '{"name":"John Smith","age":26}'` |
| DELETE | `/api/users/:id` | Delete user | `curl -X DELETE http://localhost:3000/api/users/USER_ID` |

## 🧪 Testing Methods

### 1. Using Postman/Thunder Client

#### Import Collection
```json
{
  "info": {
    "name": "User Management API",
    "description": "REST API for user management"
  },
  "item": [
    {
      "name": "Get All Users",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/api/users"
      }
    },
    {
      "name": "Create User",
      "request": {
        "method": "POST",
        "url": "{{baseUrl}}/api/users",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"age\":25}"
        }
      }
    },
    {
      "name": "Get Single User",
      "request": {
        "method": "GET",
        "url": "{{baseUrl}}/api/users/{{userId}}"
      }
    },
    {
      "name": "Update User",
      "request": {
        "method": "PUT",
        "url": "{{baseUrl}}/api/users/{{userId}}",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"name\":\"John Smith\",\"age\":26}"
        }
      }
    },
    {
      "name": "Delete User",
      "request": {
        "method": "DELETE",
        "url": "{{baseUrl}}/api/users/{{userId}}"
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000"
    },
    {
      "key": "userId",
      "value": "64a1b2c3d4e5f6789012345"
    }
  ]
}
```

### 2. Using curl Commands

#### Get All Users
```bash
curl -X GET http://localhost:3000/api/users
```

#### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "age": 25
  }'
```

#### Get Single User
```bash
# First create a user and copy the _id from response
curl -X GET http://localhost:3000/api/users/USER_ID
```

#### Update User
```bash
curl -X PUT http://localhost:3000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "age": 26
  }'
```

#### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/USER_ID
```

### 3. Using JavaScript (Browser Console)

```javascript
// Test API from browser console
const API_URL = 'http://localhost:3000/api/users';

// Get all users
fetch(API_URL)
  .then(res => res.json())
  .then(data => console.log('All users:', data));

// Create user
fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    age: 30
  })
})
.then(res => res.json())
.then(data => console.log('Created user:', data));
```

## 📊 Expected Response Formats

### Success Response
```json
{
  "success": true,
  "data": {
    "_id": "64a1b2c3d4e5f6789012345",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "createdAt": "2023-07-01T12:00:00.000Z",
    "updatedAt": "2023-07-01T12:00:00.000Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": "User not found"
}
```

### Validation Error
```json
{
  "success": false,
  "error": "Name must be at least 2 characters long"
}
```

## 🔍 Testing Checklist

### Basic Functionality
- [ ] Server starts successfully
- [ ] Database connection established
- [ ] GET `/api/users` returns empty array initially
- [ ] POST `/api/users` creates new user
- [ ] GET `/api/users` returns created users
- [ ] GET `/api/users/:id` returns specific user
- [ ] PUT `/api/users/:id` updates user
- [ ] DELETE `/api/users/:id` removes user

### Error Handling
- [ ] Invalid user ID returns 404
- [ ] Missing required fields return 400
- [ ] Invalid email format returns 400
- [ ] Duplicate email returns 400
- [ ] Invalid age range returns 400

### Data Validation
- [ ] Name: 2-50 characters, required
- [ ] Email: Valid format, unique, required
- [ ] Age: 1-120, required
- [ ] Timestamps auto-generated

## 🐛 Common Issues & Solutions

### 1. MongoDB Connection Error
```bash
# Make sure MongoDB is running
net start MongoDB

# Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/user_management
```

### 2. Port Already in Use
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process
taskkill /PID <PID> /F

# Or change port in .env
PORT=3001
```

### 3. Module Not Found
```bash
# Install dependencies
npm install

# Clear npm cache
npm cache clean --force
```

## 📈 Performance Testing

### Load Testing with Apache Bench
```bash
# Install Apache Bench (if not installed)
# Test GET endpoint
ab -n 1000 -c 10 http://localhost:3000/api/users

# Test POST endpoint
ab -n 100 -c 5 -p post_data.json -T application/json http://localhost:3000/api/users
```

### post_data.json
```json
{
  "name": "Load Test User",
  "email": "loadtest@example.com",
  "age": 25
}
```

## ✅ Success Criteria

- [ ] All CRUD operations work correctly
- [ ] Proper HTTP status codes returned
- [ ] Input validation prevents invalid data
- [ ] Error messages are descriptive
- [ ] Database operations complete successfully
- [ ] API responds within acceptable time limits
- [ ] Concurrent requests handled properly

## 🎯 Next Steps

1. Connect frontend (Task 3) to this API
2. Implement authentication features
3. Add advanced validation and error handling
4. Optimize database queries
5. Add API documentation (Swagger)

---
**This REST API provides the backend functionality for the user management system.**
