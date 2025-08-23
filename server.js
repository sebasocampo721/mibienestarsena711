const express = require('express');
const cors = require('cors'); // 👈 importa cors
const app = express();

//Habilitar CORS
app.use(cors({
  origin: '*', // aquí puedes poner la URL de tu app Flutter si quieres restringir
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

//Para que pueda leer JSON en el body de Postman
app.use(express.json());

// Importa todas las rutas
const routes = require('./routes/apiRoutes');
app.use('/api', routes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send({ message: "API activa" });
});

app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
  console.log(`Server running on PORT ${app.get('PORT')}`);
});
