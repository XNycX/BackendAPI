'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('actors',[
{"name":"Leonardo","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Kate","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Jackie","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Freddy","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Arnold","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Tom","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Ryan","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Morgan","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"Smith","createdAt":"2004-09-20","updatedAt":"1995-07-03"},{"name":"George","createdAt":"2004-09-20","updatedAt":"1995-07-03"}
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
