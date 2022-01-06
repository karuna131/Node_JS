//first way to set a cookie

// var express = require('express')
// var app = express()

// app.get('/', (req,res)=>{
//     res.cookie('name', 'express').send('cookie set');
//     console.log('Cookies : ', req.cookies)
// });
// app.listen(3000);



// second way to set a cookie

// var express = require('express');
// var cookieParser = require('cookie-parser')
// var app = express();

// app.use(cookieParser());

// app.get('/cookie_test', (req,res)=>{
//     res.cookie('username', 'karuna jaiswal');
//     res.send('cookie set....')
// });

// app.get('/cookie_check', (req,res)=>{
//     res.send('value : ' + req.cookies.username);
//     // res.send('value : ' + JSON.stringify(req.cookies));
//     console.log(req.cookies)
// })

// app.listen(3000, ()=>{
//     console.log('okkk')
// });




// var express = require('express')
// var cookieParser = require('cookie-parser')
// var app = express()

// app.use(cookieParser());

// app.get('/cookie', (req,res)=>{
//     res.cookie('username1', 'kavi', {maxAge: 10000});   //Adding Cookies with Expiration Time
//     res.cookie('password1', '34567890')
//     res.send('cookie set')
// });

// app.get('/cookies_check', (req,res)=>{
//     res.send('value : '+ req.cookies.username1)   
//     console.log(req.cookies)
// })
// app.listen(3000, ()=>{
//     console.log('okk')
// });




// for delete or clear a cookie

// var express = require('express');
// var app = express();

// app.get('/clear_cookie_foo', function(req, res){
//    res.clearCookie('foo');
//    res.send('cookie foo cleared');
// });

// app.listen(3000);





