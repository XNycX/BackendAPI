require('dotenv').config();

module.exports= {
    "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PASSWORD || "123456",
    "database": process.env.MYSQL_DATABASE || "films2022",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.MYSQL_USER,
      "password": process.env.MYSQL_PASSWORD,
      "database": process.env.MYSQL_DATABASE,
      "host": process.env.MYSQL_HOST,
      "dialect":"mysql"
    }
  }
  