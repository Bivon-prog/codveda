# Level 1 - Task 2: Build Simple REST API

## 🎯 Objective
Develop a simple REST API using Node.js with Express and implement basic CRUD operations on user resources.

## ✅ Completed Features

### 🚀 Express Server Setup
- ✅ Express server initialized
- ✅ Middleware configured (CORS, JSON parsing)
- ✅ Error handling middleware
- ✅ 404 route handler
- ✅ Environment-based configuration

### 📡 API Endpoints

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| GET | `/api/users` | Get all users | ✅ |
| GET | `/api/users/:id` | Get single user by ID | ✅ |
| POST | `/api/users` | Create new user | ✅ |
| PUT | `/api/users/:id` | Update user by ID | ✅ |
| DELETE | `/api/users/:id` | Delete user by ID | ✅ |

### 🗄️ Database Integration
- ✅ MongoDB connection with Mongoose
- ✅ User model with validation
- ✅ Database indexing and relationships
- ✅ Data validation before saving

### 🔒 Data Validation
- ✅ Name: Required, 2-50 characters
- ✅ Email: Required, unique, valid format
- ✅ Age: Required, 1-120 years
- ✅ Automatic timestamps (createdAt, updatedAt)

### ⚡ API Features
- ✅ Proper HTTP status codes
- ✅ Consistent JSON response format
- ✅ Error handling with descriptive messages
- ✅ Input validation and sanitization
- ✅ Duplicate email prevention

## 📁 Project Structure
```
Level1-Task2-REST-API/
├── server/
│   └── index.js              # Main server file
├── config/
│   └── database.js           # Database connection
├── models/
│   └── User.js               # User model schema
├── controllers/
│   └── userController.js     # CRUD logic
├── routes/
│   └── userRoutes.js         # API routes
├── .env                      # Environment variables
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## 🛠️ Technology Stack
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variables

## 🚀 Getting Started

### Installation
```bash
cd Level1-Task2-REST-API
npm install
```

### Environment Setup
```bash
cp .env.example .env
# Edit .env with your MongoDB URI
```

### Start Server
```bash
# Development
npm run dev

# Production
npm start
```

### Server Running
- 🚀 Server: http://localhost:3000
- 📚 API Docs: http://localhost:3000/
- 🗄️ Database: MongoDB

## 📝 API Usage Examples

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":25}'
```

### Get Single User
```bash
curl http://localhost:3000/api/users/USER_ID
```

### Update User
```bash
curl -X PUT http://localhost:3000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"John Smith","age":26}'
```

### Delete User
```bash
curl -X DELETE http://localhost:3000/api/users/USER_ID
```

## 📊 Response Format

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

## 🧪 Testing with Postman/Thunder Client

### Import Collection
You can test all endpoints using the following collection:

1. **GET All Users**: `GET http://localhost:3000/api/users`
2. **POST Create User**: `POST http://localhost:3000/api/users`
3. **GET Single User**: `GET http://localhost:3000/api/users/:id`
4. **PUT Update User**: `PUT http://localhost:3000/api/users/:id`
5. **DELETE User**: `DELETE http://localhost:3000/api/users/:id`

## ✅ Task Completion Status
- [x] Express server setup
- [x] API routes for CRUD operations
- [x] Database integration with MongoDB
- [x] Error handling and HTTP responses
- [x] Input validation
- [x] Postman/Thunder Client testing ready
- [x] Proper project structure

## 🎯 Next Steps
1. Proceed to **Task 3**: Frontend with HTML, CSS, JavaScript
2. Test API endpoints thoroughly
3. Connect frontend to this API

---
**This REST API provides the backend functionality for the user management system.**
