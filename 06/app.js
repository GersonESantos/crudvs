const express = require('express');
const mysql = require("mysql2");
const app = express();
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

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

/

app.get("/clientes", (req, res) => {
  db.query("SELECT * FROM cliente", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});