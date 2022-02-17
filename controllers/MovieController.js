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

MovieController.getMovieByEmail = (req, res) => {
    //Búsqueda comparando un campo
    Movie.findOne({
        where: {
            email: req.params.email
        }
    })
        .then(data => {
            res.send(data)
        });
};

MovieController.postMovie = async (req, res) => {
 //Registrando un Movie
    try {
    
        Movie.create({
            ...req.body
        }).then(Movie => {
            console.log("esta es la pelicula", Movie);
            res.send(`${usuario.name}, se ha añadido correctamente`);
        });

    } catch (error) {
        res.send(error);
    }
};

// MovieController.OpinionMovie = (req, res) => {

// };
module.exports = MovieController;