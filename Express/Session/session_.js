var express = require('express')
var session = require('express-session')
var app = express();
app.use(session({ secret : 'hDcA8mtYguwVqAQH'}));

app.get('/session_', (req,res)=>{
    res.send('session setting')
})

app.get('/session_test', (req,res)=>{
    if (req.session.count){
        res.send('count'+  req.session.count++);
    }
    else{
        req.session.count = 1;
        res.send('count' + req.session.count);
    }
})

app.listen(9000, ()=>{
    console.log('okk')
})