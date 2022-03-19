'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('actormovies', [
    {"ActorId":1,"MovieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":3,"MovieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":2,"MovieId":2,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":4,"MovieId":3,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":5,"MovieId":4,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":6,"MovieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":7,"MovieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"}
     
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actormovies', null, {});
  }
};
