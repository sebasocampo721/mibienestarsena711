const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({message:"API activa"})
});

app.set('PORT', process.env.POSRT || 4000);
app.listen(app.get('PORT'), ()=>{
    console.log(`Server running on PORT ${app.get('PORT')}`);
});