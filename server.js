if (process.env.NODE_ENV !== 'production'){
    require('dotenv').parse()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//setup here the database
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParse: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.error('Connected to Mongoose'))


app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)