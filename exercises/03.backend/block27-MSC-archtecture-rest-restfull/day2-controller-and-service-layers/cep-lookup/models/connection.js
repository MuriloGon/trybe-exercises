const { createPool } = require('mysql2/promise');

const connection = createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
});

module.exports = connection;
