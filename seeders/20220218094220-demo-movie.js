'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('movies',
[{"title":"Louise-Michel","overview":"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","popularity":7.7,"img":"https://pics.filmaffinity.com/Louise_Michel-786676110-large.jpg","release_date":"2015-05-13","createdAt":"2003-04-14","updatedAt":"2006-01-31"},
{"title":"Men in Black II (a.k.a. MIIB) (a.k.a. MIB 2)","overview":"Mauris lacinia sapien quis libero.","popularity":7.0,"img":"https://es.web.img2.acsta.net/pictures/14/05/05/12/08/380378.jpg","release_date":"2004-09-20","createdAt":"1995-07-03","updatedAt":"2008-08-04"},
{"title":"Three Crowns of the Sailor (Les trois couronnes du matelot)","overview":"Nunc purus.","popularity":4.7,"img":"https://pics.filmaffinity.com/Las_tres_coronas_del_marinero-767677584-large.jpg","release_date":"2006-05-08","createdAt":"2004-11-05","updatedAt":"2021-01-04"},
{"title":"National Treasure: Book of Secrets","overview":"Suspendisse potenti.","popularity":7.1,"img":"https://pics.filmaffinity.com/La_b_squeda-804428271-large.jpg","release_date":"2021-10-23","createdAt":"2003-04-17","updatedAt":"2003-01-03"},
{"title":"Adore","overview":"Nunc purus. Phasellus in felis.","popularity":7.3,"img":"https://pics.filmaffinity.com/Dos_madres_perfectas-103047566-large.jpg","release_date":"2004-12-04","createdAt":"2019-02-26","updatedAt":"2008-02-19"},
{"title":"I Am Divine","overview":"Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","popularity":5.5,"img":"https://es.web.img3.acsta.net/pictures/14/04/15/16/38/541134.jpg","release_date":"2013-09-12","createdAt":"2016-04-24","updatedAt":"2002-02-12"},
{"title":"Charlie Brown's Christmas Tales","overview":"Integer a nibh. In quis justo.","popularity":5.6,"img":"https://pics.filmaffinity.com/Charlie_Brown_s_Christmas_Tales_TV_TV_C-516342564-large.jpg","release_date":"2011-10-06","createdAt":"2011-04-08","updatedAt":"2015-07-21"},
{"title":"My Flesh My Blood (Moja krew)","overview":"Nam nulla.","popularity":1.9,"img":"https://pics.filmaffinity.com/moja_krew-417131700-large.jpg","release_date":"1994-02-26","createdAt":"1994-10-28","updatedAt":"1997-12-27"},
{"title":"Little Girl Who Lives Down the Lane, The","overview":"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.","popularity":7.1,"img":"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bb481bb4f2705158cdee6627eeb5909f61a79c0d8f2fcab67e10a0dc008b9b90._RI_V_TTW_.jpg","release_date":"2021-08-16","createdAt":"2011-02-17","updatedAt":"2003-02-17"},
{"title":"East of Eden","overview":"In blandit ultrices enim.","popularity": 7.6,"img":"https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/54453/54453_800x1183.jpg","release_date":"1995-12-15","createdAt":"2001-01-15","updatedAt":"1996-06-08"}],
{});
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
