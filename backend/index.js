const express = require('express');
const connectToMongo = require('./db'); // Import the connectToMongo function
const bodyParser = require('body-parser'); // Middleware to parse JSON
const authRoutes = require('./routes/auth'); // Import auth routes

connectToMongo(); // Call the function to establish a connection

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies


// Routes
app.use('/api/auth', authRoutes); // Route for authentication


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
