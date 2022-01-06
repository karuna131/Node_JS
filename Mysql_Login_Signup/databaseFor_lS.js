const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kavi@123'
});
con.connect((err)=>{
    if(err) {
        console.log("error");
    }
    else{
        console.log('connected');
        con.query('create database ls', (res,err)=>{
        if(err) throw err;
        console.log('database created ');
    });}
});