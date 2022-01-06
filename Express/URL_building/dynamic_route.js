var express = require('express')
var app = express();
app.get('/:id', function(req,res){
    res.send('our dynamic id is',+ req.params.id)
})
app.listen(3000,()=>{
    console.log("listining")
});

// const expresss = require("express")
// const app = expresss()
// app.get("/:id",(req,res)=>{
//     res.send("priyanka"+req.params.id)
// })
// app.listen(3001,()=>{
//         console.log("listining")
// });