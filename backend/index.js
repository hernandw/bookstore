const express = require('express')
const app = express()

const routes = require('./routes/router')

const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())


//Routes
app.use('/', routes)




app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
