const { User } = require('../models/index');
const UserController = {};
const bcrypt = require('bcryptjs');

UserController.getUser = (req, res) => {
    //Búsqueda trayendo a todos los usuarios
    User.findAll()
        .then(data => {
            res.send(data)
        });

};

UserController.getUserById = (req, res) => {
    //Búsqueda buscando una Id
    User.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        });
};

UserController.getUserByEmail = (req, res) => {
    //Búsqueda comparando un campo
    User.findOne({
        where: {
            email: req.params.email
        }
    })
        .then(data => {
            res.send(data)
        });
};

UserController.register = async (req, res) => {
    try {
       const hash = await bcrypt.hash(req.body.password,10)
       const user = await User.create({ ...req.body,password:hash })
        res.send(`${user.name}, bienvenid@ a este infierno`);
    } catch (error) {
        res.send(error);
    }
};


UserController.deleteAll = async (req, res) => {

    try {
        const user = await User.destroy({
            where: {},
            truncate:false
        })
            res.send(`Se han eliminado ${user.name}`) 
    } catch (error) {
        res.send(error)
    }
};

UserController.delete = async (req, res) => {
    let id = req.params.id
    
    try {
        const user = await User.destroy({
            where: {id:id},
            truncate:false
        })
            res.send(`Se han eliminado ${id}`) 
    } catch (error) {
        res.send(error)
    }
};

// UserController.register = (req, res) => {
//     User.create({ ...req.body }).then(user => {
//         console.log("este es mi amigo", user);
//         res.send(`${user.name}, bienvenida a este infierno`);
//     }).catch(err => {
//         console.error(err)
//         res.send(err)
//     })
// };
module.exports = UserController;