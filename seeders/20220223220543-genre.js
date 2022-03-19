'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('genres',[
{"name":"Horror","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Film-Noir","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Adventure","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Comedy","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Romance","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Drama","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Western","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Fantasy","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Crime","createdAt":"2022-02-24","updatedAt":"2022-02-26"},{"name":"Action","createdAt":"2022-02-24","updatedAt":"2022-02-26"}
],{});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {});
  }
};
