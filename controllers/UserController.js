const { User } = require('../models/index');
const UserController = {};
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');
const { Where } = require('sequelize/types/utils');


UserController.getUser = (req, res) => {
        User.findAll()
            .then(data => {
                res.send(data)
            });
};

UserController.getUserById = (req, res) => {
        User.findByPk(req.params.id)
            .then(data => {
                res.send(data)
            });
};

UserController.getUserByEmail = (req, res) => {
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
    if (/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password) !== true) {
        return res.send("La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres.")
     }
        try {
            const hash = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))
            const user = await User.create({ ...req.body, password: hash })
            res.send(`${user.name}, bienvenid@ a este infierno`);
        } catch (error) {
            res.status(400).send(error);
        };
    };

UserController.login = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(400).send({ message: "Usuario o contraseña incorrectos" })
        }
        const isMatch = bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: "Usuario o contraseña incorrectos" })
        }
        token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });
        res.send({ message: `Bienvenid@ ${user.name}, tu token es: ${token}` });
    })
},

    UserController.update = (req, res) => {
            let data = req.body;

            let id = req.params.id;

            try {

                User.update(data, {
                    where: { id: id }
                })
                    .then(updated => {
                        res.send(updated);
                    });

            } catch (error) {
                res.send(error)
            }
};

UsuarioController.updatePassword = (req,res) => {

    let id = req.body.id;

    let oldPassword = req.body.oldPassword;

    let newPassword = req.body.newPassword;

    Usuario.findOne({
        where : { id : id}
    }).then(usuarioFound => {

        if(usuarioFound){

            if (bcrypt.compareSync(oldPassword, usuarioFound.password)) {

                //En caso de que el Password antiguo SI sea el correcto....

                //1er paso..encriptamos el nuevo password....

                newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds)); 

                ////////////////////////////////7

                //2do paso guardamos el nuevo password en la base de datos

                let data = {
                    password: newPassword
                }

                console.log("esto es data",data);
                
                Usuario.update(data, {
                    where: {id : id}
                })
                .then(actualizado => {
                    res.send(actualizado);
                })
                .catch((error) => {
                    res.status(401).json({ msg: `Ha ocurrido un error actualizando el password`});
                });

            }else{
                res.status(401).json({ msg: "Usuario o contraseña inválidos" });
            }
        }else{
            res.send(`Usuario no encontrado`);
        }

    }).catch((error => {
        res.send(error);
    }));

};

UserController.deleteAll = async (req, res) => {
        try {
            const user = await User.destroy({
                where: {},
                truncate: false
            })
            res.send(`Se han eliminado los usuarios ${user.name}`)
        } catch (error) {
            res.send(error)
        }
};

UserController.deleteById = async (req, res) => {
        let id = req.params.id
    
        try {
            const user = await User.destroy({
                where: { id: id },
                truncate: false
            })
            res.send(`Se han eliminado ${id}`)
        } catch (error) {
            res.send(error)
        }
};

module.exports = UserController;