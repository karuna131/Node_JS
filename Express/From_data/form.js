var express = require('express');
var bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(express.static('views'))

app.get('/form', (req,res)=>{
    res.render('form_')
    console.log('okk');
})

app.post('/form', (req,res)=>{
    console.log(req.body)
    const personName = req.body.name;
    const Lname = req.body.lastname;
    const age = req.body.age;
    const mobileN = req.body.mobileNum;
    res.json({name:personName, lastname:Lname, age:age, mobileNum:mobileN})
})

app.listen(3000, ()=>{
    console.log('listening....')
})



