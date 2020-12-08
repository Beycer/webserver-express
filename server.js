const express = require('express');
const app = express();//declara una variable que es el producto de la función de express
//Un midlesware es basicamente una instrucción o un callback que se va a ejecutar siempre
//no importa que url es el que la persona pida
const hbs = require('hbs');
require('./hbs/helpers');


//para poder obtener el puerto de heroku
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


//Expres HBS engine

//si ponemos dirname lo que decimos es no importa cual path tengas, toma todo ese path
//yo no se cual excatamente, pero es una variable global, toma esa variable y concatenale 
//la siguiente ruta
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  //res.send('Hello World')

    //par mandar esto y que sea un aplicatios json, un servicio basicamente
    res.render('home', {
        nombre: 'Joel'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});
/*
app.get('/data', (req, res) => {
    res.send('Hola Data');
});*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
/*para decirle a heroku que comando debe ejecutar 
//para que inicie el proyecto npm start en scripts del package.json*/