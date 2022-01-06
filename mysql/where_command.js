// filter data

// const sql = require('mysql')
// const con = sql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : 'Kavi@123',
//     database  :'shop'
// })
// con.connect(function(err){
//     if (err) throw err;
//     con.query('SELECT * FROM customers WHERE address = "Park Lane 38"', function(err,result){
//         if (err) throw err;
//         console.log(result);
//     });
// });





// chek multiple filter data by using IN or OR

// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query('SELECT * FROM customers WHERE address IN ( "Park Lane 38","Sky st 331")', function(err, result){
//     if (err) throw err;
//     console.log(result);
//   });
// });



// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query('SELECT * FROM customers WHERE (address="Park Lane 38" OR address="Sky st 331")', function(err, result){
//     if (err) throw err;
//     console.log(result);
//   });
// });




// search by charactor

// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query('SELECT * FROM customers WHERE address LIKE "H%"', function(err, result){
//     if (err) throw err;
//     console.log(result);
//   });
// });
