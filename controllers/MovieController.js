const MovieController = {};
const axios = require('axios');

// URL API CON API_KEY:
// https://api.themoviedb.org/3/movie/76341?api_key=210d6a5dd3f16419ce349c9f1b200d6d
    
//Funciones del controlador

// MovieController.getPlayingMovie = async (req, res) => {
//         try {
//             let result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");
//             res.send(result.data);
//         } catch (error) {
//             res.send(error);
//         };
// };

// MovieController.getPopularMovie = async (req, res) => {
//     try {
//         let result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US");
//         res.send(result.data)
//     } catch (error) {
//         res.send(error);
//     };
// };

// MovieController.getTopMovie = async (req, res) => {
    
//     try {
//         let result = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");
//         res.send(result.data);
//     } catch (error) {
//         res.send(error);
//     };
// };

// MovieController.getTitleMovie = async (req, res) => {
//     let search = req.query.id
//     try {
//         let result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${search}&page=1&include_adult=false`);
//         res.send(result.data);
//     } catch (error) {
//         res.send(error);
//     };
// };

// MovieController.getNews = async (req, res) => {

//     try {

//         let result = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

//         res.send(result.data);

//     } catch (error) {
//         console.log(error);
//     }
// };

// MovieController.getMovieById = async (req, res) => {
//     let search = req.query.id
//     try {
//         let result = await axios.get(`https://api.themoviedb.org/3/movie/${search}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
//         res.send(result.data);
//     } catch (error) {
//         res.send(error);
//     };
// };

// MovieController.getReviewById = async (req, res) => {
//     let search = req.query.id
//     try {
//         let result = await axios.get(`https://api.themoviedb.org/3/movie/${search}/reviews?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
//         res.send(result.data);
//     } catch (error) {
//         res.send(error);
//     };
// };

// MovieController.getLastestMovie = async (req, res) => {
//     try {
//         let result = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
//         res.send(result.data);
//     } catch (error) {
//         res.send(error);
//     };
// };

// MovieController.getSimilarMovieById = async (req, res) => {
//     let search = req.query.id
//     try {
//         let result = await axios.get(`https://api.themoviedb.org/3/movie/${search}/similar?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
//         res.send(result.data);
//     } catch (error) {
//         res.send(error);
//     };
// };
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
    Movie.findOne({ where : { email : req.params.email }})
    .then(data => {
        res.send(data)
    });
}

MovieController.postMovie = async (req, res) => {

    //Registrando un Movie
    
    try {

        let title = req.body.title;
        let overview = req.body.overview;
        let gender = req.body.gender;
        let popularity = req.body.popularity;
        let img = req.body.img;
        let release_date = req.body.release_date;

        //Comprobación de errores.....

        //Guardamos en sequelize el Movie

        Movie.create({
            title: title,
            overview: overview,
            gender: gender,
            popularity: popularity,
            img: img,
            release_date: release_date
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