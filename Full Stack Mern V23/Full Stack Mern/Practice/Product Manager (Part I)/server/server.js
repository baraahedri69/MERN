const express = require ('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();

const port = process.env.port;

app.use(express.json(), express.urlencoded({ extended: true}), cors());

require('./config/mongoose.config');
require('./routes/product.route')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
