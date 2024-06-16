const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,      // Remove this line, it's deprecated
    useUnifiedTopology: true    // Remove this line, it's deprecated
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to the database");
});

connection.on('error', (err) => {
    console.error("MongoDB connection error:", err);
});