var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kavi@123",
  database: "shop"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = 'UPDATE customers SET address = "Main Road" WHERE address = "Valley 345"';
  con.query(sql, function(err, result){
      if (err) throw err;
      console.log('Updated records : ', result.affecedRows);
  });
});