'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'UserId'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    email: DataTypes.STRING,
    direction: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    rol: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};