const express = require('express');
const mysql = require("mysql2");
const app = express();

app.get('/', (req, res) => {
  res.write('Ola! estou conectado ao banco banco');
  res.end()
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gabibi89*",
  database: "projeto"
});

db.connect(err => {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});