const express = require('express')

require('dotenv').config()

const path = require('path')

const port = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})