const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net', // Database host
    user: 'sql5742779', // Database Username
    password: 'uJCe9SrXs7', // Database Password
    database: 'sql5742779' // Database Name
});

conexao.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

module.exports = conexao;
