const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
});

app.listen(PORT, ()=>{
    console.log(`listening......on ${PORT} port`)
})