const http = require('http');




http.createServer((request, respond) => {

    respond.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Renato',
        apellido: 'Bonilla',
        url: request.url
    };

    respond.write(JSON.stringify(salida));
    respond.end();

}).listen(8080);
console.log('Saludos');