const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ message: "API activa" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
