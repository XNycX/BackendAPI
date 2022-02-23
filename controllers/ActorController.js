const { Actor, Movie } = require('../models/index');
const ActorController = {};

ActorController.create = (req, res) => {
    try {
        Actor.create({ ...req.body })
            .then(actor => {
                res.send(actor)
                res.send(`El actor ${Actor.name}, se ha añadido correctamente`);
             });

    } catch (error) {
        res.send(error);
    }
};