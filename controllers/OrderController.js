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

OrderController.getOrder = (req, res) => {
    Order.findAll()
        .then(data => {
            res.send(data)
            .catch(error=> {
                console.log(error)
                res.status(500).send({ message: 'Ha habido un problema al cargar los pedidos' })
            })
        });
};

OrderController.update = (req, res) => {
    let data = req.body;

    let id = req.params.id;

    try {

        Order.update(data, {
            where: { id: id }
        })
            .then(updated => {
                res.send(updated);
            });

    } catch (error) {
        res.send(error)
    }
};

OrderController.deleteById = async (req, res) => {
    let id = req.params.id;

    try {
        const order = await Order.destroy({
            where: { id: id },
            truncate: false
        })
        res.send(`Se ha eliminado el pedido ${id}`)
    } catch (error) {
        res.send(error)
    };
};

module.exports = OrderController;