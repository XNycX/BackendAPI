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

GenreController.getGenre = (req, res) => {
    Genre.findAll()
        .then(data => {
            res.send(data)
        });
};

GenreController.update = (req, res) => {
    let data = req.body;

    let id = req.params.id;

    try {

        Genre.update(data, {
            where: { id: id }
        })
            .then(updated => {
                res.send(updated);
            });

    } catch (error) {
        res.send(error)
    }
};

GenreController.delete = async (req, res) => {
    try {
        const genre = await Genre.destroy({
            where: {},
            truncate: false
        })
        res.send(`Se han eliminado los generos ${genre.name}`)
    } catch (error) {
        res.send(error)
    }
};

module.exports = GenreController;