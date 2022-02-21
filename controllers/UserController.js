const { User, Token } = require('../models/index');
const UserController = {};
const bcrypt = require('bcryptjs');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');
// const { jwt_secret } = require('../config/config.json')['development'];
const { Op} = Sequelize;


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
    if (password.length >= 8) {
        try {
            const hash = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds))
            const user = await User.create({ ...req.body, password: hash })
            res.send(`${user.name}, bienvenid@ a este infierno`);
        } catch (error) {
            res.send(error);
        };
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
        Token.create({ token, UserId: user.id });
        res.send({ message: `Bienvenid@ ${user.name}, ${user} , ${token}` });
    })
},

    UserController.update = async (req, res) => {
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

            }
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

UserController.logout = async (req, res) =>{
            try {
                await Token.destroy({
                    where: {
                        [Op.and]: [
                            { UserId: req.user.id },
                            { token: req.headers.authConfig.secret }
                        ]
                    }
                });
                res.send({ message: 'Desconectado con éxito' })
            } catch (error) {
                console.log(error)
                res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
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