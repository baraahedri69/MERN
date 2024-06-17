const Product = require("../models/product.model.js"); //Import the model from the model file

module.exports = {
    createProduct: (req, res) => { 
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => console.log(err));
        
    }
};