const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3001,

    user: 'root',

    password: '',
    database: 'business_db',
});


connection.connect((err) => {
    if (err) throw err;
    start();
  });
  