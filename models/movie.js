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
      Movie.belongsToMany(models.Genre, {
        through: models.GenreMovie
      }, { onDelete: 'cascade' });
      Movie.belongsToMany(models.Actor, {
        through: models.ActorMovie
      }, { onDelete: 'cascade' });
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