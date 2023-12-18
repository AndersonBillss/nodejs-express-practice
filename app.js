const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('stuff'))

app.get('/abcde', (req, res) => {
    res.send(`<h1>aa</h1>`)
})
app.get(/fly/, (req, res) => {
    res.send('<h1>fly</h1>')
})
app.get(/pineapple/, (req, res) => {
    res.send('<h1>pineapple</h1>')
})
app.get(/greenapple/, (req, res) => {
    res.send('<h1>green apple</h1>')
})
app.get(/apple/, (req, res) => {
    res.send('<h1>apple</h1>')
})

app.listen(port, () => {
    console.log(`Server up on port: ${port}`)
})
