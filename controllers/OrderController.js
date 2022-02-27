const { Order, Movie, User } = require("../models/index");
const OrderController = {};

OrderController.placeNewOrder = (req, res) => {
  Order.create({
    ...req.body,
  })
    .then((order) => {
      res.send(order);
    })
    .catch((error) => res.send(error));
};

OrderController.getOrders = (req, res) => {
  Order.findAll({
    include: [Movie, User],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        message: "Ha habido un problema al cargar los pedidos",
      });
    });
};

OrderController.update = (req, res) => {
  let data = req.body;

  let id = req.params.id;
  Order.update(data, {
    where: {
      id: id,
    },
  })
    .then((updated) => {
      res.send(updated);
    })
    .catch((error) => res.send(error));
};

OrderController.deleteById = async (req, res) => {
  let id = req.params.id;
  try {
    await Order.destroy({
      where: {
        id: id,
      },
      truncate: false,
    });
    res.send(`Se ha eliminado el pedido ${id}`);
  } catch (error) {
    res.send(error);
  }
};

module.exports = OrderController;
