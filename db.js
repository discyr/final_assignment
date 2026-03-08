const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');


const itemsPool = new Pool({
    connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false
});

module.exports = itemsPool;
