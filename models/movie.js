'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'MovieId'
      });
      this.belongsToMany(models.Genre, {
        through:models.GenreMovie,
        foreignKey: 'MovieId'
      });
      this.belongsToMany(models.Actor, {
        through:models.ActorMovie,
        foreignKey: 'MovieId'
      });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    overview: DataTypes.STRING,
    popularity: DataTypes.FLOAT,
    img: DataTypes.STRING,
    release_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};