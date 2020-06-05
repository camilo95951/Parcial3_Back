const Pool = require('pg').Pool

var conectdb;

exports.initDb = ()=>{
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
    });
    exports.pool = pool;

};


