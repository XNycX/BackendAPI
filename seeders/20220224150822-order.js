'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
      await queryInterface.bulkInsert('orders', [
        {"price":5,"movieId":1,"userId":1,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",},{"price":5,"movieId":2,"userId":2,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",},{"price":5,"movieId":3,"userId":3,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",},{"price":5,"movieId":4,"userId":4,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",},{"price":5,"movieId":5,"userId":5,"date_rent":"2021-02-24","date_return":"2021-02-27","createdAt":"2021-02-24","updatedAt":"2021-02-25",}
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
