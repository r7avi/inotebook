const connectToMongo = require('./db'); // Import the connectToMongo function
const express = require('express')

connectToMongo(); // Call the function to establish a connection

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ravi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})