const express = require('express');
const app = express();
const PORT = 3000;

// rota principal
app.get('/', (req, res) => {            
    res.send('Hello, arthas!');
});

// iniciar servidor
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});