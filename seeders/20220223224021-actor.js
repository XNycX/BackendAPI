'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('actors',
    [[{"name":"Leonardo"},{"name":"Kate"},{"name":"Jackie"},{"name":"Freddy"},{"name":"Arnold"},{"name":"Tom"},{"name":"Ryan"},{"name":"Morgan"},{"name":"Smith"},{"name":"George"}]
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
