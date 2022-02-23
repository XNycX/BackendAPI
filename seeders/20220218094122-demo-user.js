'use strict';


  //name,city,email,password,direction,telephone


  
    const bcrypt = require('bcrypt');
    const authConfig = require('../config/auth');
    
    module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [
          [{ "name": "Stronghold", "city": "Jiangkou", "email": "apaine0@cdc.gov", "password": "GKXiV9I11", "direction": "Sheridan", "telephone": "6547336432", "createdAt": "2022-02-02", "updatedAt": "2022-01-16" },
          { "name": "Fixflex", "city": "Kuhmalahti", "email": "dkilbey1@xing.com", "password": "uy60CufMAc", "direction": "Oriole", "telephone": "6551543807", "createdAt": "2021-12-18", "updatedAt": "2021-11-10" },
          { "name": "Konklux", "city": "Camanducaia", "email": "dillston2@engadget.com", "password": "WTWNGMx1", "direction": "Bayside", "telephone": "5564187457", "createdAt": "2021-05-04", "updatedAt": "2021-10-22" },
          { "name": "Rank", "city": "Xiaojia", "email": "ctye3@mozilla.org", "password": "v8s0PO61", "direction": "Colorado", "telephone": "6685786865", "createdAt": "2021-03-16", "updatedAt": "2021-11-14" },
          { "name": "Fintone", "city": "Lucé", "email": "jcameli4@prlog.org", "password": "sRKmm111", "direction": "Forster", "telephone": "1817525044", "createdAt": "2021-04-06", "updatedAt": "2021-05-27" },
          { "name": "Stringtough", "city": "Shigu", "email": "gmayer5@marketwatch.com", "password": "SzAgVoAmSxmL", "direction": "Vidon", "telephone": "3775397848", "createdAt": "2021-09-29", "updatedAt": "2021-12-09" },
          { "name": "Konklux", "city": "Göteborg", "email": "adiloway6@google.ca", "password": "geFTwF111", "direction": "Michigan", "telephone": "4782656342", "createdAt": "2021-06-03", "updatedAt": "2021-07-30" },
          { "name": "Y-find", "city": "Lobamba", "email": "cfiveash7@xrea.com", "password": "0cO72Om5Ot4b", "direction": "Lawn", "telephone": "5543219252", "createdAt": "2021-11-22", "updatedAt": "2021-10-24" },
          { "name": "Span", "city": "Quiaios", "email": "eceyssen8@aboutads.info", "password": "P1fW033TQa", "direction": "Pepper Wood", "telephone": "9548464737", "createdAt": "2021-08-31", "updatedAt": "2021-06-15" },
          { "name": "Vagram", "city": "Örnsköldsvik", "email": "tstrongman9@plala.or.jp", "password": "O65RSDp11", "direction": "Sachs", "telephone": "2534061487", "createdAt": "2021-04-14", "updatedAt": "2021-04-05" }],
        ], {});
      },
    
  

      async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
      }
    }
  

