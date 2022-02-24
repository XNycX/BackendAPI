'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('genres',[
{"name":"Horror","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Film-Noir","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Adventure","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Comedy","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Romance","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Drama","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Western","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Fantasy","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Crime","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Action","createdAt":"2004-09-20","updatedAt":"1995-07-03"}
],{});
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
