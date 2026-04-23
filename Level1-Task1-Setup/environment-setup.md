# Development Environment Setup Guide

## 🎯 Task Objective
Set up full-stack development environment with essential tools including Node.js, npm/yarn, VS Code, Git, and database.

## ✅ Verification Checklist

### 1. Node.js Installation
```bash
# Check Node.js version
node --version
# Expected: v24.11.1 or higher

# Check npm version  
npm --version
# Expected: 11.6.2 or higher
```

### 2. Git Repository Setup
```bash
# Initialize Git repository
git init

# Check Git status
git status

# Configure Git (if not already configured)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Essential Tools Installation
```bash
# Install development dependencies
npm install --save-dev nodemon

# Install production dependencies
npm install express mongoose cors dotenv bcryptjs jsonwebtoken

# Verify installation
npm list --depth=0
```

### 4. Database Setup (MongoDB)
```bash
# Install MongoDB (Windows)
# Download from: https://www.mongodb.com/try/download/community

# Start MongoDB service
net start MongoDB

# Verify MongoDB connection
mongosh
```

### 5. Code Editor Setup
- **VS Code**: Install from https://code.visualstudio.com/
- **Recommended Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter
  - ESLint
  - MongoDB for VS Code
  - Thunder Client (for API testing)

## 📁 Project Structure
```
Level1-Task1-Setup/
├── package.json           # Project configuration
├── .gitignore            # Git ignore rules
├── environment-setup.md   # This setup guide
└── README.md            # Task documentation
```

## 🔧 Environment Variables
Create `.env` file:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/fullstack_assignment
NODE_ENV=development
```

## 📋 Basic Terminal Commands

### File System Commands
```bash
# List directory contents
ls

# Create directory
mkdir folder-name

# Change directory
cd folder-name

# Create file
touch filename.js

# Copy file
cp source.txt destination.txt

# Move file
mv source.txt destination.txt

# Remove file
rm filename.txt
```

### Git Commands
```bash
# Add files to staging
git add .

# Commit changes
git commit -m "Commit message"

# Check status
git status

# View commit history
git log --oneline

# Create branch
git branch branch-name

# Switch branch
git checkout branch-name
```

### Node.js Commands
```bash
# Run JavaScript file
node filename.js

# Run npm script
npm run script-name

# Install package
npm install package-name

# Install dev dependency
npm install --save-dev package-name

# Update packages
npm update

# Check outdated packages
npm outdated
```

## 🚀 Testing the Setup

### 1. Create Test Server
```javascript
// test-server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! Node.js is working!');
});

server.listen(3000, () => {
    console.log('Test server running on http://localhost:3000');
});
```

### 2. Run Test
```bash
node test-server.js
# Open browser: http://localhost:3000
```

### 3. Test Database Connection
```javascript
// test-db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));
```

## ✅ Completion Verification

- [ ] Node.js installed and verified
- [ ] npm installed and verified
- [ ] Git repository initialized
- [ ] Essential dependencies installed
- [ ] MongoDB installed and running
- [ ] VS Code installed with extensions
- [ ] Environment variables configured
- [ ] Basic terminal commands tested
- [ ] Test server created and running

## 🎯 Next Steps

1. Proceed to **Task 2**: Build Simple REST API
2. Use this environment for all subsequent tasks
3. Maintain consistent development setup

## 📞 Support

If you encounter issues:
- Check Node.js and npm versions
- Verify MongoDB service is running
- Ensure Git is properly configured
- Check network connectivity for package installation

---
**This setup provides the foundation for all subsequent full-stack development tasks.**
