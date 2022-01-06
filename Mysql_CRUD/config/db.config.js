const mysql = require('mysql');
const dbcon = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kavi@123',
    database : 'mydb'
});
dbcon.connect((err)=>{
    if(err) throw err;
    console.log('Database connected !')
});

module.exports = dbcon ;
