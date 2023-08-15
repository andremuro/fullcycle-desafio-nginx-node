const mysql = require('mysql')
const express = require('express')

const app = express()
const port = 3000

const conn = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    port: 3306
})

conn.connect((err) => {

    if (err) throw err
    console.log('Conectou Mysql')

    var sql = "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL)"
    conn.query(sql, function (err, result) {
    if (err) throw err
    console.log("Tabela Criada com sucesso!")
  });
})

app.get('/', (require, response) => {

    const sql1 = `INSERT INTO people(name) values('André')`
    const sql2 = `INSERT INTO people(name) values('Felipe')`

    conn.query(sql1, (err) => {
        if (err) throw err
        console.log("Registro inserido com sucesso!")
    })
    conn.query(sql2 , (err) => {
        if (err) throw err
        console.log("Registro inserido com sucesso!")
    })
        
    conn.query('SELECT * FROM people', (err, results) => {
        if (err) throw err
        response.send(`
            <h1>FullCycle!</h1>
            <ol>${results.map(item => `<li>${item.name}</li>`)}</ol>
        `)
    })
    conn.end(() => {
        console.log('Desconectou Mysql')
    })
})

app.listen(port, () => {
    console.log('Rodando aplicação na porta ' + port)
})
