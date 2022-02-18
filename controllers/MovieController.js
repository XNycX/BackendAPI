const { Movie } = require('../models/index');
const MovieController = {};

MovieController.getMovie = (req, res) => {
    //Búsqueda trayendo a todos los Movies
    Movie.findAll()
        .then(data => {

            res.send(data)
        });
};

MovieController.getMovieById = (req, res) => {
    //Búsqueda buscando una Id
    Movie.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        });
};

MovieController.getMovieByGender = (req, res) => {
    //Búsqueda comparando un campo
    Movie.findOne({
        where: {
            gender: req.params.gender
        }
    })
        .then(data => {
            res.send(data)
        });
};

MovieController.create = async (req, res) => {
 //Registrando un Movie
    try {
        Movie.create({
            ...req.body
        }).then(Movie => {
            console.log("esta es la pelicula", Movie);
            res.send(`${Movie.title}, se ha añadido correctamente`);
        });

    } catch (error) {
        res.send(error);
    }
};

// MovieController.OpinionMovie = (req, res) => {

// };
module.exports = MovieController;