'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
  
    await queryInterface.bulkInsert('genremovies', [
      {"GenreId":11,"MovieId":11,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":31,"MovieId":11,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":21,"MovieId":21,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":41,"MovieId":31,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":51,"MovieId":41,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":61,"MovieId":51,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"GenreId":71,"MovieId":51,"createdAt":"2021-02-24","updatedAt":"2021-02-26"}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('genremovies', null, {});
  }
};
