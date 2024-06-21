const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config'); 

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Routes
require('./routes/author.routes')(app);

// Start the server
app.listen(port, () => console.log(`Listening on port: ${port}`));