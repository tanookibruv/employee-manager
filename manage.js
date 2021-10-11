const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',

    port: 3001,

    user: 'root',

    password: '64244395Tar49235',
    database: 'business_db',
});


connection.connect((err) => {
    if (err) throw err;
    start();
  });
  