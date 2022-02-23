const { Genre, Movie } = require('../models/index');
const GenreController = {};

GenreController.create = (req, res) => {
    try {
        Movie.create({ ...req.body })
            .then(genre => {
                res.send(genre)
                res.send(`El género ${Genre.name}, se ha añadido correctamente`);
             });

    } catch (error) {
        res.send(error);
    }
};