import mysql from "mysql";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "crud"
})

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar-se ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  }
});
