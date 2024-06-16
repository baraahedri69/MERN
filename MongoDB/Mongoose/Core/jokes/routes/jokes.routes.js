const express = require('express');
const router = express.Router();
const JokeController = require('../controllers/jokes.controller');

router.get('/api/jokes', JokeController.getAllJokes);
router.get('/api/jokes/random', JokeController.getRandomJoke);
router.get('/api/jokes/:id', JokeController.getJokeById);
router.post('/api/jokes', JokeController.createJoke);
router.put('/api/jokes/:id', JokeController.updateJoke);
router.delete('/api/jokes/:id', JokeController.deleteJoke);

module.exports = router;