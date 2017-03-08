const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const router = require('./routes/routes')
const apiRouter = require('./routes/api-routers')

const app = express()
const port = 8080

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public'), {maxAge: 315360000}))

app.use('/', router)
app.use('/contact', router)
app.use('/api', apiRouter)

const db = require('./models')
db.sequelize.sync()
    .then(() => {
        app.listen(port, () => {
        console.log(`Server is running at https://localhost:${port}`)
    })
})
