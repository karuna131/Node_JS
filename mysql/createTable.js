//  create table

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });




// Primary Key

// const sql = require('mysql')
// var con = sql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : 'Kavi@123',
//   database : 'shop'
// })

// con.connect(function(err){
//   if (err) throw err;
//   console.log('Connect');
//   var mysql = 'CREATE TABLE rt (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))'
//   con.query(mysql, function(err, result){
//     if (err) throw err;
//     console.log('Table created');
//   });
// });



//  if your table is already exist, so use Alter Table cammand


// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table altered");
//   });
// });







// Insert data into table

// const sql = require('mysql')
// var con = sql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : 'Kavi@123',
//   database : 'shop'
// })
// con.connect(function(err){
//   if (err) throw err;
//   console.log('connected..!');
//   var mysql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
//   con.query(mysql, function(err,result){
//     if (err) throw err;
//     console.log('1 record inserted ');
//   });
// });





// Insert multiple data into table

var sql = require('mysql')
var con = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kavi@123',
    database : 'shop'
})
con.connect(function(err){
    if (err) throw err;
    console.log('connected..!');
    var mysql = 'INSERT INTO customers (name, address) VALUES ?';
    var values =[
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ]
    con.query(mysql,[values], function(err,result){
        if (err) throw err;
        console.log('Number of records :', result.affectedRows);
    });
});




// Inserted Id

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Kavi@123",
//   database: "shop"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });




