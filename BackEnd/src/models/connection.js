const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'saep',
    port: 3306
});

module.exports = connection;