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
    Usuario.findOne({
            where: {
                email: req.params.email
            }
        })
        .then(data => {
            res.send(data)
        });
}

UsuarioController.postUser = async (req, res) => {

    try {

        Usuario.create({
            ...req.body
        }).then(usuario => {
            console.log("este es mi amigo", usuario);
            res.send(`${usuario.name}, bienvenida a este infierno`);
        });

    } catch (error) {
        res.send(error);
    }
};
module.exports = UserController;