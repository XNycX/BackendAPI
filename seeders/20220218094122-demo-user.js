'use strict';


  //name,city,email,password,telephone,role
  
  const bcrypt = require('bcryptjs');;
  const authConfig = require('../config/auth');
  
    module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert('users', [
{"name":"Cristian","city":"Valencia","email":"cristian@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","role":"admin","createdAt":"2003-04-14","updatedAt":"2006-01-31"  
},{"name":"Carlos","city":"Madrid","email":"carlos@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","role":"admin","createdAt":"2003-04-14","updatedAt":"2006-01-31"  
},{"name":"Jose","city":"Barcelona","email":"jose@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","role":"user" ,"createdAt":"2003-04-14","updatedAt":"2006-01-31" 
},{"name":"David","city":"Valencia","email":"david@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","role":"user" ,"createdAt":"2003-04-14","updatedAt":"2006-01-31" 
},{"name":"Leonardo","city":"Sevilla","email":"leonardo@gmail.com","password":bcrypt.hashSync("12345678",Number.parseInt(authConfig.rounds)),"telephone":"666666666","role":"user" ,"createdAt":"2003-04-14","updatedAt":"2006-01-31" 
},   ],{});
},
    
  

      async down(queryInterface, Sequelize) {
     
       await queryInterface.bulkDelete('People', null, {});
         
      }
      }

