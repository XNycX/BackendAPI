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

MovieController.getMovieByActor = (req, res) => {
    //Búsqueda comparando un campo
    Movie.findAll({
        where: {
            actor: req.params.actor
        }
    })
        .then(data => {
            res.send(data)
        });
};

MovieController.create = (req, res) => {
    if (req.User.user.rol === "admin") {
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
};

MovieController.delete = (req, res) => {
    if (req.User.user.rol === "admin") {

        let title = req.params.title;
    
        try {
            const film = await Movie.destroy({
                where: { title: title },
                truncate: false
            })
            res.send(`Se ha eliminado la pelicula ${title}`)
        } catch (error) {
            res.send(error)
        };
    };
};

// MovieController.OpinionMovie = (req, res) => {

// };
module.exports = MovieController;