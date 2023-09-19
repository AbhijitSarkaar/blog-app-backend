const express = require('express')
const userRoutes = require('./routes/users')

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/users', userRoutes)

app.listen(3000, () => {
    console.log('listening to port 3000')
})
