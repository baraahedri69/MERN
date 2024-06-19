const ProductController = require("../controllers/products.controller");

module.exports = app => {
    app.post('/api/products/create', ProductController.createNewProduct);
    app.get('/api/products/find/all', ProductController.findAllProducts);
    app.get('/api/products/find/:id', ProductController.findOneProduct);
    // Patch only changes values in the req.body
    app.patch('/api/products/update/:id', ProductController.updateProduct); 
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}
