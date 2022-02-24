const { Movie, Genre, Actor } = require('../models/index');
const MovieController = {};

MovieController.getMovie = (req, res) => {
    //Búsqueda trayendo a todos los Movies con generos y actores
    Movie.findAll({
        include: [
            {model: Genre, as: 'Genres', through: {attributes: []}},{model: Actor, as: 'Actors', through: {attributes: []}}
        ]
    })
    .then(data => res.send(data))
    .catch(error=> {
        console.log(error)
        res.status(500).send({ message: 'Ha habido un problema al cargar la pelicula' })
    })
},


MovieController.getMovieById = (req, res) => {
    //Búsqueda buscando una Id
    Movie.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        });
};

MovieController.getMovieByTitle = (req, res) => {
    //Búsqueda comparando un campo
    Movie.findAll({
        where: {
            title: req.params.title
        }
    })
        .then(data => {
            res.send(data)
        });
};

MovieController.getMovieByGender = (req, res) => {
    //Búsqueda comparando un campo
    Movie.findAll({
        where: {
            gender: req.params.gender
        }
    })
        .then(data => {
            res.send(data)
        });
};

MovieController.create = (req, res) => {
        try {
            Movie.create({ ...req.body })
                .then(movie => {
                    movie.addGenre(req.body.GenreId)
                    movie.addActor(req.body.ActorId)
                    res.send(movie)
                 });

        } catch (error) {
            res.send(error);
        }
};

MovieController.createMany = async (req, res) => {
        try {
            const movies = req.body;
            const moviesResponse = []
            movies.forEach(async movie => {
                const movieCreated = await Movie.create({ ...movie });
                movieCreated.addGenre(movie.GenreId);
                moviesResponse.push(movieCreated)
            });
            res.send('movies created')
        }
        catch (error) {
            res.send(error)
        }
    };
    





MovieController.deleteById = async (req, res) => {
        let id = req.params.id;
    
        try {
            const film = await Movie.destroy({
                where: { id: id },
                truncate: false
            })
            res.send(`Se ha eliminado la pelicula ${id}`)
        } catch (error) {
            res.send(error)
        };
};
// MovieController.OpinionMovie = (req, res) => {

// };
module.exports = MovieController;