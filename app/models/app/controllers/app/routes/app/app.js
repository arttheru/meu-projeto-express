const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json()); // Para interpretar JSON no corpo da requisição
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});