'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.bulkInsert('orders', [
        {"movieId":11,"userId":11,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",}
        ,{"movieId":12,"userId":12,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",}
        ,{"movieId":13,"userId":13,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",}
        ,{"movieId":14,"userId":14,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",}
        ,{"movieId":15,"userId":15,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
