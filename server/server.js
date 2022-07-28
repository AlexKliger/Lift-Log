const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const path = require('path')
const workoutsRoutes = require('./routes/workouts')
const connectDB = require('./config/db')
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()
const app = express()

// Middleware
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// Sessions
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection})
    })
)
// Passport
app.use(passport.initialize())
app.use(passport.session())
// Routes
app.use('/workouts', workoutsRoutes)

app.get('*', (req, res) => {
    try {
        res.sendFile(__dirname + '/../client/build/index.html')
    } catch (err) {
        console.log(err)
    }
})

PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})