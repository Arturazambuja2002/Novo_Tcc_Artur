const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const path = require('path')
const session = require('express-session');
var app = express();

app.use(cookieparser())
app.use(session({
    secret: '123',
    resave: true,
    saveUninitialized:true
}))
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
 res.render('index.ejs')
})

app.get('/login', (req,res) => {
    res.render('login.ejs')
})
app.get('/contato', (req,res) => {
    res.render('contato.ejs')
})
app.get('/sobre', (req,res) => {
    res.render('sobre.ejs')
})

app.listen(3001, function(){
    console.log("Rodando na porta 3000")
})