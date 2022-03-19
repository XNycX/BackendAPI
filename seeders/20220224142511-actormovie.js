'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('actormovies', [
    {"ActorId":11,"MovieId":11,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":31,"MovieId":11,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":21,"MovieId":21,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":41,"MovieId":31,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":51,"MovieId":41,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":61,"MovieId":51,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
    {"ActorId":71,"MovieId":51,"createdAt":"2021-02-24","updatedAt":"2021-02-26"}
     
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('actormovies', null, {});
  }
};
