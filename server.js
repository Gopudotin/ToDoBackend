const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect Database
connectDB();

// Define Routes
app.get('/', (req, res) => res.send('API is running...'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
