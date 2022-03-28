const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const path = require('path')
const session = require('express-session');
var Usuario = require('./model/usuario')

const loginController = require("./controller/loginController")

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
 res.render('inicio.ejs')
})
app.post('/' , (req,res) =>{
    res.render('telainicial.ejs')
})
//LOGIN
app.get('/login', loginController.abreLogin);
app.post('/login', (req,res) => {
    var usuario = new Usuario({
        nome: req.body.txtName,
        email: req.body.txtEmail,
        senha: req.body.txtSenha
    })
    usuario.save(function(err){
        if(err){
            console.log('erro')
        }else{
            res.redirect('/home')
        }
    })
});


app.get('/cadastrar', (req,res) => {
    res.render('cadastrar.ejs')
})
app.get('/home', (req,res) => {
    res.render('home.ejs')
})
app.get('/contato', (req,res) => {
    res.render('contato.ejs')
})
app.get('/sobre', (req,res) => {
    res.render('sobre.ejs')
})
app.get('/projetos', (req,res) => {
    res.render('projetos.ejs')
})
app.get('/gastos', (req,res) => {
    res.render('gastos.ejs')
})
app.get('/perfil', (req,res) => {
    res.render('perfil.ejs')
})
app.get('/novoprojeto', (req,res) => {
    res.render('novoprojeto.ejs')
})

app.listen(3001, function(){
    console.log("Rodando na porta 3000")
})