const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const connectToMongo = require('./db'); // Import the connectToMongo function
const bodyParser = require('body-parser'); // Middleware to parse JSON
const authRoutes = require('./routes/auth'); // Import auth routes
const studentRouter = require('./routes/student'); // Adjust the path as needed
const authenticateToken = require('./middleware/authMiddleware'); // Import token authentication middleware

require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;
const host = '0.0.0.0'; // Listen on all network interfaces

// Connect to MongoDB
connectToMongo(); 

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Use CORS middleware
app.use(cors({
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

// Routes
app.use('/api/auth', authRoutes); // Route for authentication
app.use('/api/student', authenticateToken, studentRouter); // Routes for student data (requires authentication)

// Start the server
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
