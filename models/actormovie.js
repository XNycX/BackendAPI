'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActorMovie extends Model {
    static associate(models) {
    }
  }
  ActorMovie.init({
    ActorId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActorMovie',
  });
  return ActorMovie;
};