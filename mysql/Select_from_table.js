// select from table

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });
// con.connect(function(err){
//     if (err) throw err;
//     con.query('SELECT * FROM customers', function(err,result,fields){
//         if (err) throw err;
//         console.log(result);
//     })
// })






// select field objects

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query('SELECT name, address FROM customers', function(err,result,fields){
//       if (err) throw err;
//       console.log(fields);
//   });
// });




//Selecting Columns


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kavi@123",
  database: "shop"
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT name, address FROM customers', function(err,result,fields){
      if (err) throw err;
      console.log(result);
  });
});