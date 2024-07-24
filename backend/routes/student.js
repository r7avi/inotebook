// routes/student.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middleware/authMiddleware');

// Get student data
router.get('/data', authenticateToken, async (req, res) => {
    try {
        // Fetch user data from the database based on the token's user info
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({
            username: user.username,
            name: user.name,
            phoneNumber: user.phoneNumber,
            email: user.email,
            course: user.course
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
