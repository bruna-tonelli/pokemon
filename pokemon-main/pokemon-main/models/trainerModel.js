const trainers = [
    { nome: 'Rodolfo', pokemons: [{ id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' }, { id: 2, nome: 'Squirtle', tipo: 'Água' }] },
    { nome: 'Clodoaldo', pokemons: [{ id: 3, nome: 'Charmander', tipo: 'Fogo' }, { id: 4, nome: 'Pikachu', tipo: 'Elétrico' }] },
];

const getTrainers = () => trainers;

const getTrainerByName = (nome) => trainers.find(t => t.nome.toLowerCase() === nome.toLowerCase());

module.exports = { getTrainers, getTrainerByName };
