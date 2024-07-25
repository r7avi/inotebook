const express = require('express');
const SIB = require('sib-api-v3-sdk');
const router = express.Router();

const apiKey = process.env.BREVO_API_KEY; // Store API key in .env

if (!apiKey) {
    console.error('BREVO_API_KEY is not defined');
}

// Initialize Brevo client
const apiInstance = SIB.ApiClient.instance;
const apiKeyInstance = apiInstance.authentications['api-key'];
apiKeyInstance.apiKey = apiKey;

// Route to send emails
router.post('/api/notifications/email', async (req, res) => {
    const { toUser, toAdmin, subject, body } = req.body;

    const emailApi = new SIB.TransactionalEmailsApi();

    try {
        // Send email to user
        await emailApi.sendTransacEmail({
            sender: { email: 'react@ktmracing.site' },
            to: [{ email: toUser }],
            subject: subject,
            textContent: body
        });

        // Send email to admin
        await emailApi.sendTransacEmail({
            sender: { email: 'react@ktmracing.site' },
            to: [{ email: toAdmin }],
            subject: 'New User Registered',
            textContent: `A new user has registered with email: ${toUser}`
        });

        res.status(200).send('Emails sent');
    } catch (error) {
        console.error('Error sending email:', error);
        console.error('Error details:', error.response ? error.response.text : error.message);
        res.status(500).send(error.message);
    }
});

module.exports = router;
