const trainerModel = require('../models/trainerModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('trainers', { trainers });
};

const getTrainerPokemons = (req, res) => {
    const trainer = trainerModel.getTrainerByName(req.params.nome);
    if (trainer) {
        res.render('trainer', { trainer });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = { getAllTrainers, getTrainerPokemons };