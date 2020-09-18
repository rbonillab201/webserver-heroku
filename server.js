const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = express();

app.use(express.static(__dirname + '/public'));
// HBS Express
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    //   res.send('Hola Mundo');
    let salida = {
        nombre: 'renato bonilla',
        apellido: 'Bonilla',
        url: req.url
    };
    //  res.send(salida);
    res.render('home', {
        nombre: 'renato bonilla',
        annio: new Date().getFullYear()
    });
});
app.get('/about', function(req, res) {
    //   res.send('Hola Mundo');
    let salida = {
        nombre: 'Renato',
        apellido: 'Bonilla',
        url: req.url
    };
    //  res.send(salida);
    res.render('about', {
        nombre: 'Renato',
        annio: new Date().getFullYear()
    });
});

// Ejemplo si se desea tener otro endpoint
app.get('/data', function(req, res) {
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});