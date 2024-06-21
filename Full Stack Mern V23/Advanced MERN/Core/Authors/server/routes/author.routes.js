const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthorById);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
};