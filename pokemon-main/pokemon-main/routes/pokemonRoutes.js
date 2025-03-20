const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');
const trainerController = require('../controllers/trainerController');


router.get('/trainers', trainerController.getAllTrainers);
router.get('/trainers/:nome', trainerController.getTrainerPokemons);


router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/create', pokemonController.renderCreatePokemonPage);
router.post('/create', pokemonController.createPokemon);

module.exports = router;
