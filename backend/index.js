require('dotenv').config(); // Load environment variables at the very beginning

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const studentRouter = require('./routes/student');
const authenticateToken = require('./middleware/authMiddleware');
const emailRoutes = require('./routes/emailRoutes'); // Ensure this path is correct
const enquiryRoutes = require('./routes/enquiryRoutes'); 

const app = express();
const port = process.env.PORT || 3001;
const host = '0.0.0.0';

// Connect to MongoDB
connectToMongo();

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/student', authenticateToken, studentRouter);
app.use(emailRoutes); // Register email routes
app.use('/api/enquiry', enquiryRoutes); // Register the enquiry routes

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
