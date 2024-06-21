const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 chars"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1, "{PATH} must be at least 1$"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 chars"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema); 