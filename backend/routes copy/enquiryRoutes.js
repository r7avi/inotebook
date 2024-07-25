const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const SIB = require('sib-api-v3-sdk');

const apiKey = process.env.BREVO_API_KEY; // Store API key in .env

if (!apiKey) {
    console.error('BREVO_API_KEY is not defined');
} else {
    console.log('BREVO_API_KEY is defined');
}

// Initialize Brevo client
const apiInstance = SIB.ApiClient.instance;
const apiKeyInstance = apiInstance.authentications['api-key'];
apiKeyInstance.apiKey = apiKey;

router.post('/submit-enquiry', async (req, res) => {
    const { name, email, age, contact, city, address, course, subcourse } = req.body;

    console.log('Received enquiry:', req.body);

    try {
        // Save enquiry to MongoDB
        const newEnquiry = new Enquiry({
            name,
            email,
            age,
            contact,
            city,
            address,
            course,
            subcourse
        });

        await newEnquiry.save();
        console.log('Enquiry saved to database.');

        // Setup Brevo client
        const emailApi = new SIB.TransactionalEmailsApi();

        // Send email to user
        await emailApi.sendTransacEmail({
            sender: { email: 'react@ktmracing.site' },
            to: [{ email: email }],
            subject: 'Thank you for your enquiry!',
            textContent: `Hello ${name},\n\nThank you for your enquiry about ${course} - ${subcourse}. We will get back to you soon.\n\nBest regards,\nThe Team`
        });
        console.log('Email sent to user.');

        // Send email to admin
        await emailApi.sendTransacEmail({
            sender: { email: 'react@ktmracing.site' },
            to: [{ email: 'ravi@justconstruct.co' }], // Replace with the admin's email address
            subject: 'New Enquiry Submitted',
            textContent: `A new enquiry has been submitted:

Name: ${name}
Email: ${email}
Age: ${age}
Contact: ${contact}
City: ${city}
Address: ${address}
Course: ${course}
Sub-course: ${subcourse}`
        });
        console.log('Email sent to admin.');

        res.status(200).json({ message: 'Enquiry submitted and email sent' });
    } catch (error) {
        console.error('Error handling enquiry:', error);
        res.status(500).json({ message: 'Error submitting enquiry' });
    }
});

module.exports = router;
