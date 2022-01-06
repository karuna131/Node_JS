var express = require('express')
var app = express();
var rout = require('./using_router.js');
app.use('/rout', rout)
app.listen(3000)