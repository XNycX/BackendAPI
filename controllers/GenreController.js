const { Genre,Actor, Movie } = require('../models/index');
const GenreController = {};

GenreController.create = (req, res) => {
    try {
       Genre.create({ ...req.body })
            .then(genre => {
                res.send(genre)
            });
            

    } catch (error) {
        res.send(error);
    }
};

GenreController.getGenres = (req, res) => {
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

GenreController.getGenreByName = (req, res) => {
    Genre.findAll({
        where: {
            name: req.params.name
        },
        include: [
            {model: Movie, as: 'Movies', through: {attributes: []}}
        ]
    })
        .then(data => {
            res.send(data)
        });
};


module.exports = GenreController;