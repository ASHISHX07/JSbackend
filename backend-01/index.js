const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()

const response = '';

const url = 'https://api.github.com/users/ASHISHX07'
async function getData () {
    const data = fetch(url)
    (await data).json()
    response = data;
}

console.log(response);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
    res.send('hello this is Youtube example response')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login first</h1>')
})

app.get('/github', (req, res) => {
    res.send(`the api data is: ${response}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})