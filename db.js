const Pool = require('pg').Pool
const pool = new Pool({
    user:'ukd_student',
    password:'password',
    database: 'ukd_db',
    host: 'localhost',
    port: 12611
})
module.exports = pool


/*
CREATE TABLE students(
id SERIAL PRIMARY KEY,
      first_name VARCHAR(255),
      last_name VARCHAR(255),
      age INTEGER
*/