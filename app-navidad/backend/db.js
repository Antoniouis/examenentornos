const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'navidad',
  port: 5432,
});

module.exports = pool;
