'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
  
    await queryInterface.bulkInsert('genremovies', [
      {"GenreId":1,"MovieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":3,"MovieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":2,"MovieId":2,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":4,"MovieId":3,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":5,"MovieId":4,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":6,"MovieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":7,"MovieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('genremovies', null, {});
  }
};
