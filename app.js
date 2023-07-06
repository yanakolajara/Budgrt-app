const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const controller = require('./controllers/resources.controller')

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use('/transactions', controller)


app.get('/', (req,res) => {
    res.send('Hello')
})

app.get('*', (req,res) => {
    res.status(404).send('Page not found')
})

module.exports = app