'use strict';


  //name,city,email,password,telephone,role
  
  const bcrypt = require('bcryptjs');;
  const authConfig = require('../config/auth');
  
    module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('users', [
{"name":"Cristian","surname":"one","city":"Valencia","email":"cristian@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","dni":"12345678Z","role":"admin","confirmed":1,"createdAt":"2003-04-14","updatedAt":"2006-01-31"  
},{"name":"Carlos","surname":"two","city":"Madrid","email":"carlos@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","dni":"12345678Z","role":"admin","confirmed":1,"createdAt":"2003-04-14","updatedAt":"2006-01-31"  
},{"name":"Jose","surname":"three","city":"Barcelona","email":"jose@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","dni":"12345678Z","role":"user" ,"confirmed":1,"createdAt":"2003-04-14","updatedAt":"2006-01-31" 
},{"name":"David","surname":"four","city":"Valencia","email":"david@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","dni":"12345678Z","role":"user" ,"confirmed":1,"createdAt":"2003-04-14","updatedAt":"2006-01-31" 
},{"name":"Leonardo","surname":"five","city":"Sevilla","email":"leonardo@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","dni":"12345678Z","role":"user" ,"confirmed":1,"createdAt":"2003-04-14","updatedAt":"2006-01-31" 
},   ],{});
},
    
  

      async down(queryInterface, Sequelize) {
     
       await queryInterface.bulkDelete('users', null, {});
         
      }
      }

