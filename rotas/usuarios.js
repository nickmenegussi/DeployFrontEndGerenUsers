const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Adicionar um usuário
router.post('/', (req, res) => {
    const { nome, email } = req.body;
    const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';

    db.query(query, [nome, email], (err, result) => {
        if (err) throw err;
        const novoUsuario = { id: result.insertId, nome, email };
        res.json(novoUsuario);
    });
});

// Listar todos os usuários
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;