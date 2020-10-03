const express = require('express')
const app = express()
const hbs = require('hbs');


let port = process.env.PORT || 3000;

let texto = 'prueba de hbs';

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    let salida = {
        nombre: 'h',
        edad: '26',
        texto: 'este es el footer'
    };

    res.render('home', salida)
});


app.listen(port, () => console.log(`Escuchando en el puerto ${ port }`))