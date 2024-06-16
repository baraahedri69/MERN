const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); // Add this line

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
require('./config/mongoose.config');

// Import routes
const jokesRoutes = require('./routes/jokes.routes');
app.use('/api', jokesRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});