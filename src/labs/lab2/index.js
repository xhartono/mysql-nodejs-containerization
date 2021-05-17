require('dotenv').config()
const express = require('express')
const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.send("Hello World")
})

app.listen( port, () => {
    console.log(`Minimal Web Aplikasi http://${host}:${port}`)
})
