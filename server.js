const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const puerto = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public')); //puede chocar con lo demas,  puede alternar entre mostrar esta pagina o el servicio de abajo
// es de dominio publico, todos pueden acceder, no hay limitación o restriccion.
// es necesario dejar el url especifico, incluyendo el .html en el navegador.

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', function(req, res) {


    res.render('home', {
            nombre: 'Igor',
            clase: 'Druida'
        })
        /*
        let salida = {
            nombre: "Igor",
            edad: 24,
            url: req.url
        }

        //res.send('Hola mundo ql');
        res.send(salida);*/
})

app.get('/about', function(req, res) {
    res.render('about', )

})

app.listen(puerto, () => { console.log("Se levanto csm :o, en el puerto " + puerto) });