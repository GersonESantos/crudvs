const express = require('express');
const rota_produto = require('./rotas/produtos_rotas');
// const mysql = require("mysql2");
const app = express();

app.get('/', (req, res) => {
  res.write('Ola!');
  res.end()
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Gabibi89*",
//   database: "projeto"
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log("Banco de dados conectado!");
// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});