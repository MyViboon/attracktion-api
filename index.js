const express = require('express');
const cors = require('cors')
const mysql = require('mysql2');
require('dotenv').config()

const app = express();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

app.use(cors());

app.get('/helloworld', (req, res) => {
    res.json({msg: 'Hello'});
})

app.get('/attraction', (req, res) => {
    pool.query("SELECT * FROM attractions", (err, rows, fields) => {
        res.json(rows);
    })
})

app.listen(5000, () => {
    console.log('web server listening on port 5000')
})