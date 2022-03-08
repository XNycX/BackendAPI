'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'UserId'
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce tu nombre",
        },
      },
    },
    surname: DataTypes.STRING,
    city: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce tu correo",
        },
        isEmail: {
          msg: "Por favor introduce un correo valido",
        },
      },
    },
    password: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    dni: DataTypes.STRING,
    role: DataTypes.STRING,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};