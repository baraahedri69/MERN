const { Author } = require('../models/author.model');

module.exports = {
    createAuthor: (req, res) => {
        const { name } = req.body;
        Author.create({ name })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err));
    }
};

module.exports.getAuthor = (req, res) => {
    Author.find()
        .then(authors => res.status(200).json(authors))
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports.getAuthorById = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => {
            if (!author) return res.status(404).json({ error: 'Author not found' });
            res.status(200).json(author);
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.status(400).json(err));
};