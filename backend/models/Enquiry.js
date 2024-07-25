// models/Enquiry.js

const mongoose = require('mongoose');

// Define the enquiry schema
const enquirySchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true }, 
    age: { type: Number, required: true }, 
    contact: { type: String, required: true }, 
    city: { type: String, required: true }, 
    address: { type: String, required: true }, 
    course: { type: String, required: true }, 
    subcourse: { type: String } 
}, {
    collection: 'Enquiries' // Specify the collection name
    // No need for timestamps here unless required
});

// Create and export the Enquiry model
const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = Enquiry;
