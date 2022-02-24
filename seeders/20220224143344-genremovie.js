'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
  
    await queryInterface.bulkInsert('genremovies', [
      {"genreId":1,"movieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"genreId":3,"movieId":1,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"genreId":2,"movieId":2,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"genreId":4,"movieId":3,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"genreId":5,"movieId":4,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"genreId":6,"movieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"},
      {"genreId":7,"movieId":5,"createdAt":"2021-02-24","updatedAt":"2021-02-26"}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
