const { Order, Movie, User } = require('../models/index');
const OrderController = {};

OrderController.placeNewOrder = (req,res) => {
    try {
        Order.create({ ...req.body/*,date_return:new Date(new Date(updatedAt) + 72 * 60 * 60 * 1000)*/ })
            .then(order => {
                /*order.addMovie(req.body.MovieId)
                order.addUser(req.body.UserId)*/
                res.send(order)
             });

    } catch (error) {
        res.send(error);
    }
};


module.exports = OrderController;