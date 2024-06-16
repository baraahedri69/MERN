const Joke = require('../models/jokes.model');

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find()
            .then(jokes => res.json(jokes))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    getJokeById: (req, res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err));
    },
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.status(400).json(err));
    },
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },
    getRandomJoke: (req, res) => {
        Joke.countDocuments().exec((err, count) => {
            let random = Math.floor(Math.random() * count);
            Joke.findOne().skip(random)
                .then(joke => res.json(joke))
                .catch(err => res.json({ message: 'Something went wrong', error: err }));
        });
    }
};