const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');
const { authenticate, checkRole } = require('../middleware/auth');

// Route to create new content (accessible only to admins)
router.post('/create', authenticate, checkRole('admin'), ContentController.createContent);

// Add other content-related routes, applying authentication or role checks as necessary
router.get('/:id', authenticate, ContentController.getContentById); // Example of a protected route for all authenticated users
router.put('/update/:id', authenticate, checkRole('admin'), ContentController.updateContent); // Update route for admins
router.delete('/delete/:id', authenticate, checkRole('admin'), ContentController.deleteContent); // Delete route for admins

module.exports = router;
