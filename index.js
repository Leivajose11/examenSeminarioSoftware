// Importar express
const express = require("express");


// Crear un servidor express
const app = express();

//crear ruta para /
app.get("/", (req, res, next) => {
    res.send("Bienvenidos");
  });



// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });
  