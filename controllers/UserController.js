const UserController = {};

UsuarioController.getUser = (req, res) => {
    //Búsqueda trayendo a todos los usuarios
    Usuario.findAll()
    .then(data => {

        res.send(data)
    });

};

UsuarioController.getUserById = (req, res) => {
    //Búsqueda buscando una Id
    Usuario.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};

UsuarioController.getUserByEmail = (req, res) => {
    //Búsqueda comparando un campo
    Usuario.findOne({ where : { email : req.params.email }})
    .then(data => {
        res.send(data)
    });
}

UsuarioController.postUser = async (req, res) => {

    //Registrando un usuario
    
    try {

        let name = req.body.name;
        let surname = req.body.surname;
        let email = req.body.email;
        let direction = req.body.direction;
        let pay_method = req.body.pay_method;
        let telephone = req.body.telephone;

        //Comprobación de errores.....

        //Guardamos en sequelize el usuario

        Usuario.create({
            name: name,
            surname: surname,
            email: email,
            pay_method: pay_method,
            direction: direction,
            telephone: telephone
        }).then(usuario => {
            console.log("este es mi amigo", usuario);
            res.send(`${usuario.name}, bienvenida a este infierno`);
        });

    } catch (error) {
        res.send(error);
    }
    
};
module.exports = UserController;