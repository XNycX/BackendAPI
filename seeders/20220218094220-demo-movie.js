'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movies', 
   [[{"title":"Louise-Michel","overview":"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","popularity":7.7,"img":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","release_date":"2015-05-13","createdAt":"2003-04-14","updatedAt":"2006-01-31"},
   {"title":"Men in Black II (a.k.a. MIIB) (a.k.a. MIB 2)","overview":"Mauris lacinia sapien quis libero.","popularity":7.0,"img":"Nullam varius.","release_date":"2004-09-20","createdAt":"1995-07-03","updatedAt":"2008-08-04"},
   {"title":"Three Crowns of the Sailor (Les trois couronnes du matelot)","overview":"Nunc purus.","popularity":4.7,"img":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","release_date":"2006-05-08","createdAt":"2004-11-05","updatedAt":"2021-01-04"},
   {"title":"National Treasure: Book of Secrets","overview":"Suspendisse potenti.","popularity":7.1,"img":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","release_date":"2021-10-23","createdAt":"2003-04-17","updatedAt":"2003-01-03"},
   {"title":"Adore","overview":"Nunc purus. Phasellus in felis.","popularity":7.3,"img":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.","release_date":"2004-12-04","createdAt":"2019-02-26","updatedAt":"2008-02-19"},
   {"title":"I Am Divine","overview":"Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","popularity":5.5,"img":"In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.","release_date":"2013-09-12","createdAt":"2016-04-24","updatedAt":"2002-02-12"},
   {"title":"Charlie Brown's Christmas Tales","overview":"Integer a nibh. In quis justo.","popularity":5.6,"img":"Vestibulum rutrum rutrum neque.","release_date":"2011-10-06","createdAt":"2011-04-08","updatedAt":"2015-07-21"},
   {"title":"My Flesh My Blood (Moja krew)","overview":"Nam nulla.","popularity":1.9,"img":"Pellentesque at nulla. Suspendisse potenti.","release_date":"1994-02-26","createdAt":"1994-10-28","updatedAt":"1997-12-27"},
   {"title":"Little Girl Who Lives Down the Lane, The","overview":"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.","popularity":7.1,"img":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.","release_date":"2021-08-16","createdAt":"2011-02-17","updatedAt":"2003-02-17"},
     { "title": "East of Eden", "overview": "In blandit ultrices enim.", "popularity": 7.6, "img": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.", "release_date": "1995-12-15", "createdAt": "2001-01-15", "updatedAt": "1996-06-08" }],
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
