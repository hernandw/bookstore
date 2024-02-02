const express = require('express')
const app = express()
const cors = require('cors')

const routes = require('./routes/router')

const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())
app.use(cors())


//Routes
app.use('/', routes)




app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
