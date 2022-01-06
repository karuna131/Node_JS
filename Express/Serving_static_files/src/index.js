var express = require('express');
var app = express();

app.use('/static', express.static('views'));

app.listen(3000,()=>{
    console.log("ok");
});