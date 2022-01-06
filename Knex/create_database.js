const sql = require('mysql')
var con = sql.createConnection({
    host:'localhost',
    user : 'root',
    password : 'Kavi@123'
})
con.connect(function(err){
    if (err) throw err;
    console.log('connected !');
    var mysql = 'CREATE DATABASE mydata';
    con.query(mysql, function(err, result){
        if (err) throw err;
        console.log('database created..!')
    })
})