const http = require("http");

http
  .createServer((request, response) => {
    response.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    response.writeHead(200, { "Content-Type": "application/csv" });
    response.write("1,Emanuel\n");
    response.write("2,Michelle\n");
    response.end();
  })
  .listen(8080);

console.log("escuchando en el puerto 8080");
