const mysql = require('mysql');
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kavi@123',
    database : 'ls'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE UserInformation (Name VARCHAR(255), password VARCHAR(255), Discription VARCHAR(255), DOB VARCHAR(255), gender VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});