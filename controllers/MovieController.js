const MovieController = {};
const axios = require('axios');

// URL API CON API_KEY:
// https://api.themoviedb.org/3/movie/76341?api_key=210d6a5dd3f16419ce349c9f1b200d6d
    
//Funciones del controlador

MovieController.getPlayingMovie = async (req, res) => {
        try {
            let result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");
            res.send(result.data);
        } catch (error) {
            res.send(error);
        };
};

MovieController.getPopularMovie = async (req, res) => {
    try {
        let result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US");
        res.send(result.data)
    } catch (error) {
        res.send(error);
    };
};

MovieController.getTopMovie = async (req, res) => {
    
    try {
        let result = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");
        res.send(result.data);
    } catch (error) {
        res.send(error);
    };
};

MovieController.getTitleMovie = async (req, res) => {
    let search = req.query.id
    try {
        let result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${search}&page=1&include_adult=false`);
        res.send(result.data);
    } catch (error) {
        res.send(error);
    };
};

MovieController.getNews = async (req, res) => {

    try {

        let result = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1");

        res.send(result.data);

    } catch (error) {
        console.log(error);
    }
};

MovieController.getMovieById = async (req, res) => {
    let search = req.query.id
    try {
        let result = await axios.get(`https://api.themoviedb.org/3/movie/${search}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        res.send(result.data);
    } catch (error) {
        res.send(error);
    };
};

MovieController.getReviewById = async (req, res) => {
    let search = req.query.id
    try {
        let result = await axios.get(`https://api.themoviedb.org/3/movie/${search}/reviews?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
        res.send(result.data);
    } catch (error) {
        res.send(error);
    };
};

MovieController.getLastestMovie = async (req, res) => {
    try {
        let result = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        res.send(result.data);
    } catch (error) {
        res.send(error);
    };
};

MovieController.getSimilarMovieById = async (req, res) => {
    let search = req.query.id
    try {
        let result = await axios.get(`https://api.themoviedb.org/3/movie/${search}/similar?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1`);
        res.send(result.data);
    } catch (error) {
        res.send(error);
    };
};


// MovieController.OpinionMovie = (req, res) => {

// };
module.exports = MovieController;