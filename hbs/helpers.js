const hbs = require('hbs');


hbs.registerHelper('getanio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('Capitalizar', (texto) => {
    let palabra = texto.split('');
    palabra.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });
    return palabra.join('');
})