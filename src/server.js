const express = require('express')
const apiRoutes = require('./api/routes/apiRoutes.js')
const port = 3000

const app = express()

// serve the frontend (HTML)
app.use(express.static('src/public'))

// api routes
app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log('server running on port: '+port)
})