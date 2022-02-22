require('dotenv').config();

module.exports = {
    secret: process.env.AUTH_SECRET || "test1", //KEY USADA PARA ENCRIPTAR
    expires: process.env.AUTH_EXPIRES || "24h", //DURACIÓN DEL TOKEN
    rounds: process.env.AUTH_ROUNDS || 10 //VECES QUE SE ENCRIPTA LA CONTRASEÑA
}