const { Actor } = require('../models/index');
const ActorController = {};

ActorController.create = (req, res) => {
    try {
        Actor.create({ ...req.body })
            .then(actor => {
                res.send(actor)
             });

    } catch (error) {
        res.send(error);
    }
};

ActorController.getActor = (req, res) => {
    Actor.findAll()
        .then(data => {
            res.send(data)
        });
};

ActorController.update = (req, res) => {
    let data = req.body;

    let id = req.params.id;

    try {

        Actor.update(data, {
            where: { id: id }
        })
            .then(updated => {
                res.send(updated);
            });

    } catch (error) {
        res.send(error)
    }
};

ActorController.delete = async (req, res) => {
    try {
        const actor = await Actor.destroy({
            where: {},
            truncate: false
        })
        res.send(`Se han eliminado los actores ${actor.name}`)
    } catch (error) {
        res.send(error)
    }
};

module.exports = ActorController;