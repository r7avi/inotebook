const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/bright-minds";

const connectToMongo = () => {
  mongoose.connect(mongoURI) // No need for options
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch(err => {
      console.error("MongoDB connection error:", err);
    });
};

module.exports = connectToMongo;
