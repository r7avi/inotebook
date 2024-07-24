// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Unique username
    password: { type: String, required: true }, // Password field
    name: { type: String, required: true }, // User's name
    phoneNumber: { type: String, required: true }, // User's phone number
    email: { type: String, required: true, unique: true }, // User's email, unique
    course: { type: String, required: true }, // User's course
    timestamp: { type: Date, default: Date.now } // Automatically set timestamp
}, {
    collection: 'Users' // Specify the collection name
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
    // Check if password field is modified or new user is being created
    if (this.isModified('password') || this.isNew) {
        // Hash the password with bcrypt
        this.password = await bcrypt.hash(this.password, 10);
    }
    next(); // Continue with saving the user
});

// Method to compare password during login
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
