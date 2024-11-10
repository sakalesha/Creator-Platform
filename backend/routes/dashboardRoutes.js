// backend/routes/dashboardRoutes.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

// Define the route to serve dashboard data from a JSON file
router.get('/dashboard', (req, res) => {
    // Define the path to the JSON file
    const dataPath = path.join(__dirname, '..', 'data', 'dashboardData.json'); // Adjust the path as necessary
    
    // Read the JSON file asynchronously
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            // Send an error response if the file cannot be read
            return res.status(500).json({ error: 'Failed to read dashboard data' });
        }

        // Parse the data and send it as a JSON response
        res.json(JSON.parse(data));
    });
});

// Export the router to be used in the main server file
module.exports = router;
