const express = require('express');
const app = express();

app.use(express.json());

app.get('/registro', (req, res) => {

  const nombre = req.query.nombre;
  const mensaje = req.query.mensaje;

  res.json({
    estado: "Datos recibidos por GET",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos por POST",
    nombre: nombre,
    mensaje: mensaje
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});