const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: './.env' })
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.static("uploads"))
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/api/v1/auth', require('./routes/auth.routes'))
app.use('/api/v1/tour', require('./routes/tour.routes'))

app.use('*', (req, res, next) => {
    return res.status(404).json({ message: 'Resource Not Found' })
})

app.use((err, req, res, next) => {
    return res.status(500).json({ message: 'Server Error', error: err.message })
})

mongoose.connect(process.env.MONGODB_URL)

const PORT = process.env.PORT || 3000
mongoose.connection.once('open', () => {
    console.log('MONGODB IS CONNECTED');
    app.listen(PORT, console.log(`SERVER IS RUNNING ON ${PORT}`))
})