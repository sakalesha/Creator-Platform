const express = require('express');
const cors = require('cors');  // Import the cors package
const app = express();
const dashboardRoutes = require('./routes/dashboardRoutes'); // Adjust path as needed

// Enable CORS for all origins
app.use(cors());  // This will allow requests from any origin

// If you want to restrict to a specific domain, you can configure it like this:
// app.use(cors({ origin: 'http://127.0.0.1:5500' }));

// Use the dashboard routes
app.use('/api', dashboardRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
