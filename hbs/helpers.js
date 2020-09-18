const hbs = require('hbs');

hbs.registerHelper('getDate', () => {

    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (caracteres) => {

    let palabras = caracteres.split(' '); // mete la oración dividida por el espaciador en un arreglo
    palabras.forEach((dato, idx) => {
        palabras[idx] = dato.charAt(0).toUpperCase() + dato.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});