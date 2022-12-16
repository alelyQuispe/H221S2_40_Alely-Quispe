
var express = require('express');
  

var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get('/login', function (req, res) {
	res.sendFile(__dirname + "/login.html");
});

const puerto = process.env.PUERTO || 3000;

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});

//Recursos
app.use(express.static(__dirname+'/'));






var mysql = require("mysql");

var cors = require("cors");

app.use(express.json());
app.use(cors());




  

