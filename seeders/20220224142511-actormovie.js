'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('actormovies', [
    {"actorId":1,"movieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"actorId":3,"movieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"actorId":2,"movieId":2,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"actorId":4,"movieId":3,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"actorId":5,"movieId":4,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"actorId":6,"movieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"actorId":7,"movieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"}
     
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actormovies', null, {});
  }
};
