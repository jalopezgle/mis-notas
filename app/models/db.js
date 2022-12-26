// const mysql = require("pg");
// const dbConfig = require("../config/db.config.js");

// var connection = mysql.createPool({
  // host: dbConfig.HOST,
  // port: dbConfig.PORT,
  // user: dbConfig.USER,
  // password: dbConfig.PASSWORD,
  // database: dbConfig.DB
// });

// module.exports = connection;

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

module.exports = pool;
