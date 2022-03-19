"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          title: "Louise-Michel",
          overview:
            "Una noche, el director de una empresa textil vacía su fábrica para trasladarla. Al día siguiente, Louise y sus colegas deciden contratar a un profesional para que mate a su antiguo jefe. Louise elige a Michel.",
          popularity: 7.7,
          img: "https://www.cine.com/peliculas/9565/cartel/9565_cartel_orig.jpg",
          price:5,
          release_date: "2015-05-13",
          createdAt: "2003-04-14",
          updatedAt: "2006-01-31",
        },
        {
          title: "Men in Black II",
          overview: "En Hombres de Negro II, Jay y Kay se vuelven a unir para proporcionar nuestra mejor, última y única línea de defensa contra una siniestra seductora que supone el mayor reto de la principal e intachable misión de los Hombres de Negro",
          popularity: 7.0,
          img: "https://es.web.img2.acsta.net/pictures/14/05/05/12/08/380378.jpg",
          price:5,
          release_date: "2004-09-20",
          createdAt: "1995-07-03",
          updatedAt: "2008-08-04",
        },
        {
          title: "Three Crowns of the Sailor",
          overview: "Un marinero borracho persuade a un estudiante, que acaba de cometer un brutal asesinato, para que lo acompañe y escuche la macabra historia de su vida: una serie de aventuras tras descubrir que está condenado a ser el único miembro vivo de la tripulación",
          popularity: 4.7,
          img: "https://m.media-amazon.com/images/M/MV5BMTcwZGJkMmItZDBkZC00MTE2LWFhMTctMzBiNjIzNDczNDFkXkEyXkFqcGdeQXVyMTAxMDQ0ODk@._V1_.jpg",
          price:5,
          release_date: "2006-05-08",
          createdAt: "2004-11-05",
          updatedAt: "2021-01-04",
        },
        {
          title: "National Treasure: Book of Secrets",
          overview: "En 1865, después de la Guerra Civil, John Wilkes y Michael se acercaron a Thomas Gates y su hijo Charles Carroll. Y le pidieron a Thomas, un experto solucionador de enigmas, para decodificar una cifra escrita en código Playfair en el diario de Booth.",
          popularity: 7.1,
          img: "https://www.themoviedb.org/t/p/w500/xxoIBbvmTj1ZttzV439jAvoovTw.jpg",
          price:5,
          release_date: "2021-10-23",
          createdAt: "2003-04-17",
          updatedAt: "2003-01-03",
        },
        {
          title: "Adore",
          overview: "Narra la apasionada relación de Roz y Lil, dos grandes amigas desde su infancia que han crecido juntas en una ciudad costera. Sus hijos ya adolescentes, han hecho una gran amistad quizá tan fuerte como la amistad que une a sus madres.",
          popularity: 7.3,
          img: "https://http2.mlstatic.com/D_NQ_NP_774111-MLM30607596897_052019-O.jpg",
          price:5,
          release_date: "2004-12-04",
          createdAt: "2019-02-26",
          updatedAt: "2008-02-19",
        },
        {
          title: "I Am Divine",
          overview:
            "I am Divine es un retrato biográfico de Harris Glenn Milstead, también conocido como Divine. Desde su niñez fue un joven niño inadaptado en su escuela en Baltimore, pero a través de su ascenso a la fama se convirtió en una superestrella de culto.",
          popularity: 5.5,
          img: "https://es.web.img3.acsta.net/pictures/14/04/15/16/38/541134.jpg",
          price:5,
          release_date: "2013-09-12",
          createdAt: "2016-04-24",
          updatedAt: "2002-02-12",
        },
        {
          title: "Charlie Brown's Christmas Tales",
          overview: "Aunque quedan pocos días para Navidad, y a pesar de los regalos y las decoraciones, Charlie Brown se siente deprimido. Al hablar con Lucy sobre su problema, ella decide animarlo nombrándolo director de la obra de teatro navideña que harán en la escuela.",
          popularity: 5.6,
          img: "https://m.media-amazon.com/images/I/51IwfyZX7VL.jpg",
          price:5,
          release_date: "2011-10-06",
          createdAt: "2011-04-08",
          updatedAt: "2015-07-21",
        },
        {
          title: "My Flesh My Blood",
          overview: "Igor es un boxeador que se ha visto obligado a dejar los rings después de que los muchos golpes que ha recibido en la cabeza le hayan provocado daños graves en el cerebro; Yien Ha es una inmigrante vietnamita que trabaja en un pequeño restaurante étnico.",
          popularity: 1.9,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_NpvLRCdeK2hLWqp8zDbMBseagvx6lUDPMsfFerVMc8qkuhBuQca6Ntmz_YmvBgKUS0&usqp=CAU",
          price:5,
          release_date: "1994-02-26",
          createdAt: "1994-10-28",
          updatedAt: "1997-12-27",
        },
        {
          title: "Little Girl Who Lives Down the Lane",
          overview:
            "Rynn Jacobs es una joven que vive en una casa apartada de la costa, con un padre que apenas sale de su estudio, en el que trabaja escribiendo poesía y al que nadie ve hace mucho tiempo.",
          price:5,
          popularity: 7.1,
          img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bb481bb4f2705158cdee6627eeb5909f61a79c0d8f2fcab67e10a0dc008b9b90._RI_V_TTW_.jpg",
          release_date: "2021-08-16",
          createdAt: "2011-02-17",
          updatedAt: "2003-02-17",
        },
        {
          title: "East of Eden",
          overview: "En Salinas, vive un agricultor de lechugas, Adam Trask, con sus dos hijos, Cal y Aron. Cal es rebelde y problemático; en cambio, Aron es tranquilo y trabajador",
          price:5,
          popularity: 7.6,
          img: "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/54453/54453_800x1183.jpg",
          release_date: "1995-12-15",
          createdAt: "2001-01-15",
          updatedAt: "1996-06-08",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies', null, {});
  },
};
