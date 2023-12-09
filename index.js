const express = require('express')
const path = require('path')

const app = express()
const port = 80

app.use('/css',express.static('css'))
app.use('/assets',express.static('assets'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})