const express = require('express');
const { authenticate } = require('../middleware/auth'); // Authentication middleware
const UserController = require('../controllers/userController'); // User controller

const router = express.Router();

// Route for user registration
router.post('/register', UserController.register);

// Route for user login
router.post('/login', UserController.login);

// Protect route for user profile, requires authentication
router.get('/profile', authenticate, UserController.getProfile);

// Add other user-related routes as necessary
module.exports = router;
