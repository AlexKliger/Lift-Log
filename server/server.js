const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
const workoutsRoutes = require('./routes/workouts')
require('dotenv').config({path: './config/.env'})

connectDB()
const app = express()

// Middleware
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
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