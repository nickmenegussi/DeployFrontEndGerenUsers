const express = require('express');
const cors = require('cors');
const rotasUsuarios = require('./rotas/usuarios');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/usuarios', rotasUsuarios);

const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
    console.log(`Backend rodando na porta ${PORTA}`);
});
