var sql = require('mysql')
var con = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kavi@123',
    database : 'shop'
})
con.connect(function(err){
    if (err) throw err;
    var mysql = 'DELETE FROM customers WHERE address = "Mountain 21"';
    con.query(mysql, function(err, result){
        if (err) throw err;
        console.log('Number of records deleted : ', result.affectedRows);
        // console.log(result)
    });
});