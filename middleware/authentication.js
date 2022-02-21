const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
// const  { jwt_secret }  = require('../config/config.json')['development']
const authConfig = require('../config/auth');

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, authConfig.secret);
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [
                    { UserId: user.id },
                    { token: token }
                ]
            }
        });
        if (!user || !tokenFound) {
            res.status(401).send({ message: 'No estas autorizado' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}

const isAdmin = async(req, res, next) => {
    const admins = ['admin'];
    if (!admins.includes(req.user.role)) {
        return res.status(403).send({
            message: 'No tienes permiso de acceso'
        });
    }
    next();
}

module.exports = { authentication, isAdmin }
