const express = require('express');
const produtorio = require('./routes/produtorioRoute');

const app = express();

app.use('/api/v1/produtorio', produtorio);

module.exports = app;

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));