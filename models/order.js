'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movie, {
        foreignKey: 'MovieId'
      });
      this.belongsTo(models.User, {
        foreignKey: 'UserId'
      });
    }
  }
  Order.init({
    price: DataTypes.INTEGER,
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