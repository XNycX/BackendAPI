const { User , Order,Movie} = require("../models/index");
const UserController = {};
const bcrypt = require("bcryptjs");
const authConfig = require("../config/auth");
const jwt = require("jsonwebtoken");
const transporter = require("../config/nodemailer");

UserController.getUsers = (req, res) => {
  User.findAll().then((data) => {
    res.send(data);
  });
};

UserController.getUserById = (req, res) => {
  User.findByPk(req.user.id,{include: [{ model : Order,       
   include: [Movie]}],}).then((data) => {
    res.send(data);
  });
};

UserController.getUserByEmail = (req, res) => {
  User.findOne({
    where: {
      email: req.params.email,
    },
  }).then((data) => {
    res.send(data);
  });
};

UserController.register = async (req, res) => {
  if (/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password) !== true) {
    return res.send(
      "La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres."
    );
  }
  try {
    const hash = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );
    const user = await User.create({ ...req.body, password: hash });
    res.send(`${user.name}, bienvenid@ a films2022`);
  } catch (error) {
    res.status(400).send(error);
  }
};

UserController.registerByEmail = async (req, res) => {
  try {
    if (/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password) !== true) {
      return res.send(
        "La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres."
      );
    }
    const hash = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );
    const user = await User.create({
      ...req.body,
      password: hash,
      confirmed: 0,
      role: "user",
    });
    const emailToken = jwt.sign({ email: req.body.email }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });
    const url = "http://localhost:3000/users/confirm/" + emailToken;
    await transporter.sendMail({
      to: req.body.email,
      subject: "Confirme su registro en films2022",
      html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
                    <a href="${url}"> Click para confirmar tu registro</a> `,
    });
    res.send(
      `${user.name}, Te hemos enviado un correo para confirmar el registro en la web films2022, recuerda revisar tu carpeta SPAM si no ves nuestro correo`
    );
  } catch (error) {
    res.status(400).send(error);
  }
};

(UserController.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .send({ message: "Usuario o contraseña incorrectos" });
    }
    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ message: "Usuario o contraseña incorrectos" });
    }
    token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });
    res.send({ message: `Bienvenid@ ${user.name}`, token, user });
  });
}),
  (UserController.loginByEmail = (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Usuario o contraseña incorrectos" });
      }
      if (!user.confirmed) {
        return res.status(400).send({
          message:
            "Debes confirmar tu correo, recuerda revisar tu carpeta de SPAM si no ves nuestro correo de confirmación",
        });
      }

      token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expires,
      });
      res.send({ message: `Bienvenid@ ${user.name}, tu token es: ${token}` });
    });
  }),
  (UserController.update = async (req, res) => {
    try {
      let data = req.body;
      if (/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password) !== true) {
        return res.send(
          "La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres."
        );
      }
      let id = req.params.id;
      await User.update(
        { ...data, confirmed: 1 },
        {
          where: { id: id },
        }
      );
      const user = await User.findByPk(req.params.id);
      res.send({ message: "Usario actualizado con éxito", user });
    } catch (error) {
      res.send(error);
    }
  });

UserController.updatePassword = (req, res) => {
  let id = req.body.id;

  let oldPassword = req.body.oldPassword;

  let newPassword = req.body.newPassword;

  Usuario.findOne({
    where: { id: id },
  })
    .then((usuarioFound) => {
      if (usuarioFound) {
        if (bcrypt.compareSync(oldPassword, usuarioFound.password)) {
   
          newPassword = bcrypt.hashSync(
            newPassword,
            Number.parseInt(authConfig.rounds)
          );

          let data = {
            password: newPassword,
          };

          console.log("esto es data", data);

          Usuario.update(data, {
            where: { id: id },
          })
            .then((actualizado) => {
              res.send(actualizado);
            })
            .catch((error) => {
              res
                .status(401)
                .json({ msg: `Ha ocurrido un error actualizando el password` });
            });
        } else {
          res.status(401).json({ msg: "Usuario o contraseña inválidos" });
        }
      } else {
        res.send(`Usuario no encontrado`);
      }
    })
    .catch((error) => {
      res.send(error);
    });
};

UserController.deleteAll = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {},
      truncate: false,
    });
    res.send(`Se han eliminado los usuarios ${user.name}`);
  } catch (error) {
    res.send(error);
  }
};

UserController.deleteById = async (req, res) => {
  let id = req.params.id;
  try {
    await User.destroy({
      where: { id: id },
      truncate: false,
    });
    res.send({message:`Se ha eliminado el usuario ${id}`,id});
  } catch (error) {
    res.send(error);
  }
};

(UserController.confirmEmail = async (req, res) => {
  try {
    const token = req.params.emailToken;
    const payload = jwt.verify(token, authConfig.secret);
    await User.update(
      { confirmed: true },
      {
        where: {
          email: payload.email,
        },
      }
    );
    res.status(201).send("Usuario confirmado con exito");
  } catch (error) {
    console.error(error);
  }
}),
  (module.exports = UserController);
