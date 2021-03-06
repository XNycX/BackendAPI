'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.Movie, {
        through:models.OrderMovie,
        foreignKey: 'MovieId'
      });
      this.belongsTo(models.User, {
        foreignKey: 'UserId'
      });
    }
  }
  Order.init({
    MovieId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    date_rent: DataTypes.DATE,
    date_return: DataTypes.DATE
  },
  
  
  {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};