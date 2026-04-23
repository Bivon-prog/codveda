# Full-Stack Development Assignment - Level 1

This project is a full-stack web application built as part of the Codveda Technology internship assignment. It demonstrates basic full-stack development skills including REST API creation, database integration, and frontend development.

## 🚀 Features

- **User Management System**: Complete CRUD operations for user data
- **REST API**: Express.js backend with proper error handling
- **Database Integration**: MongoDB with Mongoose ODM
- **Responsive Frontend**: Modern HTML5, CSS3, and vanilla JavaScript
- **Real-time Updates**: Dynamic user interface with API integration

## 📋 Assignment Requirements Completed

### Level 1 - Basic Tasks ✅

#### Task 1: Setup Development Environment ✅
- ✅ Node.js and npm installed and configured
- ✅ Git repository initialized
- ✅ Project structure created with proper organization
- ✅ Dependencies installed (Express, Mongoose, CORS, etc.)
- ✅ Development environment configured with nodemon

#### Task 2: Build Simple REST API ✅
- ✅ Express server setup with middleware
- ✅ User model with validation
- ✅ Complete CRUD operations:
  - `GET /api/users` - Get all users
  - `GET /api/users/:id` - Get single user
  - `POST /api/users` - Create new user
  - `PUT /api/users/:id` - Update user
  - `DELETE /api/users/:id` - Delete user
- ✅ Error handling and proper HTTP responses
- ✅ Database integration with MongoDB

#### Task 3: Frontend with HTML, CSS, JavaScript ✅
- ✅ Responsive web design with modern CSS
- ✅ Interactive user interface
- ✅ API integration with Fetch API
- ✅ Dynamic data display and manipulation
- ✅ Form validation and error handling
- ✅ User-friendly notifications and modals

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features
- **Fetch API** - HTTP requests

### Development Tools
- **Nodemon** - Auto-restart development server
- **Git** - Version control

## 📁 Project Structure

```
assign/
├── Level1-Task1-Setup/        # 🛠️ Self-contained development environment setup
│   ├── package.json          # Task 1 dependencies and scripts
│   ├── .gitignore            # Git ignore rules for Task 1
│   ├── environment-setup.md   # Complete setup guide
│   └── README.md             # Task 1 documentation
├── Level1-Task2-REST-API/     # 🔌 Self-contained REST API implementation
│   ├── server/
│   │   └── index.js          # Main server file
│   ├── config/
│   │   └── database.js       # Database connection
│   ├── models/
│   │   └── User.js           # User model schema
│   ├── controllers/
│   │   └── userController.js # User CRUD logic
│   ├── routes/
│   │   └── userRoutes.js     # User API routes
│   ├── .env                  # Environment variables
│   ├── .gitignore            # Git ignore rules for Task 2
│   ├── package.json          # Task 2 dependencies and scripts
│   ├── api-testing-guide.md   # Complete API testing guide
│   └── README.md             # Task 2 documentation
├── Level1-Task3-Frontend/     # 🎨 Self-contained frontend implementation
│   ├── index.html            # Frontend HTML
│   ├── css/
│   │   └── style.css         # Frontend styles
│   ├── js/
│   │   └── app.js            # Frontend JavaScript
│   ├── assets/               # Static assets
│   ├── .gitignore            # Git ignore rules for Task 3
│   ├── frontend-setup-guide.md # Complete frontend setup guide
│   └── README.md             # Task 3 documentation
├── Full-Stack Development Task List.pdf  # Original assignment PDF
├── README.md                 # Main project documentation
└── .git/                     # Git repository
```

## 🎯 Self-Contained Tasks

Each task folder is completely independent and can be worked on separately:

### 📦 Task 1: Development Environment Setup
```bash
cd Level1-Task1-Setup
npm install
# Follow environment-setup.md for complete setup
```

### 🚀 Task 2: REST API
```bash
cd Level1-Task2-REST-API
npm install
npm start
# Follow api-testing-guide.md for testing
```

### 🎨 Task 3: Frontend
```bash
cd Level1-Task3-Frontend
# Open index.html in browser
# Follow frontend-setup-guide.md for testing
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on localhost:27017
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api/users

## 📡 API Endpoints

### Users API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get single user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |

### Request/Response Examples

#### Create User
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

#### Response
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

## 🎨 Frontend Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with animations
- **Form Validation**: Client-side validation with user-friendly error messages
- **Real-time Updates**: Automatic data refresh and dynamic updates
- **User Interactions**: Add, edit, and delete users with confirmation dialogs
- **Error Handling**: Comprehensive error handling with user notifications

## 🔧 Configuration

### Environment Variables (.env)
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/fullstack_assignment
NODE_ENV=development
```

## 🧪 Testing the API

You can test the API endpoints using:
- **Postman** or **Thunder Client** (VS Code extension)
- **curl** commands
- **Frontend interface** (built-in)

### Example curl commands:
```bash
# Get all users
curl http://localhost:3000/api/users

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","age":30}'

# Update a user
curl -X PUT http://localhost:3000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","age":31}'

# Delete a user
curl -X DELETE http://localhost:3000/api/users/USER_ID
```

## 🚀 Deployment

### For Production:
1. Set `NODE_ENV=production` in environment
2. Use a production MongoDB instance
3. Consider using a process manager like PM2
4. Set up proper CORS origins
5. Implement security best practices

## 📝 Assignment Submission

This project fulfills all Level 1 requirements for the Codveda Technology full-stack development assignment:

- ✅ Development environment setup
- ✅ REST API with CRUD operations
- ✅ Frontend with API integration
- ✅ Database integration
- ✅ Error handling
- ✅ Responsive design
- ✅ Documentation

## 🤝 Contributing

This is an assignment project, but contributions are welcome! Please follow standard Git workflow:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Company**: Codveda Technology
- **Email**: support@codveda.com
- **Website**: www.codveda.com

## 📄 License

This project is created as part of an internship assignment for Codveda Technology.

---

**Note**: This project demonstrates fundamental full-stack development skills and serves as a foundation for more advanced features and applications.
#   c o d v e d a  
 