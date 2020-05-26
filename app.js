const http = require('http');


http.createServer((req, resp) => {

        resp.writeHead(200, { "content-type": "application/json" });

        let salida = {
            nombre: "Igor",
            edad: 24,
            url: req.url
        }

        resp.write(JSON.stringify(salida));
        //resp.write("Hola Mundo ql");
        resp.end();

    })
    .listen(8080);

console.log("puerto 8080");