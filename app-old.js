const http = require('http');
//para poder escuchar peticiones http primero creamos el servidor
//esto resive un callback y ese callbac va resivir tanto los requeste o las solicitudes
//junto con las respuestas que nuestro servidor le va a enviar
http.createServer( (req, res) =>{

    res.writeHead(200, {'Content-Type': 'application/json'} );

    let salida = {
        nombre: 'Joel',
        apellido: 'Barcenas',
        edad: 27,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    //res.write('Hola Mundo');
    //indicarle que ya acabamos de crear la respuesta, si no se puede quedar pegado el server
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');