const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', {pokemons});
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', {pokemon});
    } else {
        res.status(404).send('Pokémon não encontrado')
    }
};

const renderCreatePokemonPage = (req, res) => {
    res.render('create');
};


const createPokemon = (req, res) => {
    const { nome, tipo } = req.body; 

    if (!nome || !tipo) {
        return res.status(400).send('Dados incompletos');
    }

    pokemonModel.createPokemon(nome, tipo);

    res.redirect('/');
};

module.exports = {getAllPokemons, getPokemon, createPokemon, renderCreatePokemonPage};