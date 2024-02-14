const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();
const app = express();
const fs = require('fs');
const https = require('https');
// Middleware
app.use(bodyParser.json());
app.use(cors());


// Load SSL certificates
const options = {
  key: fs.readFileSync('path/to/directory/key.pem'),
  cert: fs.readFileSync('path/to/directory/cert.pem'),
  passphrase: 'shubh'
};

// Define routes or middleware for your Express app
app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});
app.use('/api', routes);
// Create HTTPS server
const server = https.createServer(options, app);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});