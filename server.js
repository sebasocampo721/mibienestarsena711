const express = require('express');
const app = express();



// Importa todas las rutas
const routes = require('./routes/index');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send({ message: "API activa" });
});



app.set('PORT',  process.env.PORT || 4000); 
app.listen(app.get('PORT'), () => {
    console.log(`Server running on PORT ${app.get('PORT')}`);
});
