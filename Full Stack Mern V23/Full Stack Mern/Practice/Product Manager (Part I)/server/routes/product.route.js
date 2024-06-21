const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAll);
    app.get('/api/product/:id', ProductController.getOne);
    app.post('/api/product/new', ProductController.create);
    app.patch('/api/product/update/:id', ProductController.update);
    app.delete('/api/product/delete/:id', ProductController.delete);
}
