const app = require('./src/app')

const PORT = process.env.PORT || 9090

app.listen(PORT, (err)=> {
    if(err){console.log(`error in server setup err: ${err}`)}
    console.log('server listening on Port:', PORT)
})