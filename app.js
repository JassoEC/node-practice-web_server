const express = require("express");
const app = express();

const port = 8080;

// servir contenido estatico
app.use(express.static("public"));

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public-old/404.html");
});

app.listen(port, () => {
  console.log(`Esuchando en el puerto ${port}`);
});
