const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ir7avi:HFq2XxdneU4X4s4N@react.axnsfjr.mongodb.net/";

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
