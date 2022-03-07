require('dotenv').config();

module.exports= {
  "development": {
    "username": "baba4eb5306c74",
    "password":"e4288412",
    "database": "heroku_c9d8601d3252c3d",
    "host":"eu-cdbr-west-02.cleardb.net",
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
      "username": "baba4eb5306c74",
      "password":"e4288412",
      "database": "heroku_c9d8601d3252c3d",
      "host":"eu-cdbr-west-02.cleardb.net",
      "dialect":"mysql"
    }
  }
  