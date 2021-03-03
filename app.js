const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200);
    response.write("Hola prro");
    response.end();
  })
  .listen(8080);

console.log("escuchando en el puerto 8080");
