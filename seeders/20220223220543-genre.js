'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genre',
    [[  { "name": "Horror" },
        { "name": "Film-Noir" },
        { "name": "Adventure" },
        { "name": "Comedy" },
        { "name": "Romance" },
        { "name": "Drama" },
        { "name": "Western" },
        { "name": "Fantasy" },
        { "name": "Crime" },
        { "name": "Action" }]
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
