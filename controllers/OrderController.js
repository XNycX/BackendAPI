const { Order, Movie, User } = require('../models/index');

let movieModel  = require('../models').Movie; //TRAIGO MODELO DE PELICULA, PARA MOSTRAR DATOS DE LAS PELICULAS

let userModel  = require('../models').User; //TRAIGO MODELO DE USUARIO, PARA MOSTRAR DATOS DE LOS USUARIOS




const OrderController = {};

OrderController.placeNewOrder = () => {
    
}

module.exports = OrderController;