
const express = require('express')
const app = express();
const {getProfanityCheck} = require('./controller/controller')
const cors = require('cors')
app.use(cors())
app.use(express.json())


app.post('/api/profanity', getProfanityCheck)

app.use('/*', (req, res)=> {
    res.status(404).send({msg: 'not found'});
})

module.exports = app;