const { Product } = require('../models/product.model');

module.exports.create = (request, response) => {
    Product.create(request.body)
        .then(object => response.json(object))
        .catch(err => response.status(400).json(err))
}

module.exports.getAll = (request, response) => {
    Product.find({})
        .then(objects => response.json(objects))
        .catch(err => response.status(400).json(err))
}

module.exports.getOne = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(object => response.json(object))
        .catch(err => response.status(400).json(err))
}

module.exports.update = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err))
}

module.exports.delete = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}