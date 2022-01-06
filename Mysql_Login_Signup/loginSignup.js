const { userInfo } = require('os');
var input = require('readline-sync');
var user1 = input.question('what you want Login / Sign-up : ')
if (user1=='signup'){
    var Name = input.question('Enter your name : ');
    var password1 = input.question('Enter a strong password : ');
    if (password1.match(/[a-z]/g) && password1.match(/[0-9]/g) && password1.match(/[A-Z]/g) && password1.match(/[@#$&]/g)){
        var confirm_password = input.question('Reenter your password : ');

        if(password1 == confirm_password){
            console.log('successfully verified your password ')
            var Discription = input.question('Write Discription : ');
            var DOB = input.question('Enter your DOB : ');
            var Gender = input.question('Enter your Gender F/M : ')

            const mysql =require('mysql');
            const con = mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : 'Kavi@123',
                database : 'ls'
            });
            con.connect(function(err) {
                if (err) throw err;
                var sql = "INSERT INTO UserInformation (Name, password, Discription, DOB, Gender) VALUES ?";
                var values = [[Name, confirm_password, Discription, DOB, Gender]];
                con.query(sql, [values], function (err, result) {
                  if (err) throw err;
                  console.log('yor are successfully signup ');
                });
              });
        }
        else{
            console.log('Password doesn\'t  match ')
        }
    }
    else{
        console.log('password must be strong ')
    }
    
}
else if(user1 == 'login'){
    var UserName = input.question('Enter your name : ');
    var Userpassword = input.question('Enter your password : ');
    
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Kavi@123",  
        database: "ls"
    });

    con.connect((err)=>{
        if(err) throw err;
        var Name = UserName;
        var password = Userpassword;
        var sql = 'select * from UserInformation where (Name = ? AND password = ?)'
        con.query(sql, [Name,password], (err, result)=>{
            if(err) {
                console.log("error");
            }
            else{
                if(result.length==0){
                    console.log("Your information is not correct");
                }
                else{
                    console.log(result);
                }
        }
        });
    });
};















// knex.form(userInformation).select(Name, password).where('Name', '==', 'UserName', 'password', '==', 'Userpassword')
    // .then((row)=>{
    //     for (row of row){
    //         console.log(row['Name'], row['password']);
    //     }
    // });
