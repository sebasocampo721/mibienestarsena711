const express = require('express');
const app = express();

// Para que pueda leer JSON en el body de Postman
app.use(express.json());

// Importa todas las rutas
const routes = require('./routes/apiRoutes');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send({ message: "API activa" });
});

app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
  console.log(`Server running on PORT ${app.get('PORT')}`);
});
