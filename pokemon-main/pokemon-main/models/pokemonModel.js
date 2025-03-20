const pokemons = [
    {id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno'},
    {id: 2, nome: 'Squirtle', tipo: 'Água'},
    {id: 3, nome: 'Charmander', tipo: 'Fogo'},
    {id: 4, nome: 'Pikachu', tipo: 'Elétrico'},
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));
const createPokemon = (nome, tipo) => {
    const newPokemon = { 
        id: pokemons.length + 1, 
        nome, 
        tipo 
    };
    pokemons.push(newPokemon);
};

module.exports = {getPokemons, getPokemonById, createPokemon};
