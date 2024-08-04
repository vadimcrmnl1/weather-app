const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

//Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 100
})
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});
app.use(limiter)
app.set('trust proxy', 1)

//Set static folder
app.use(express.static('public'))

//Routes
app.use('/', require('./server/routes'))


//Enable cors
app.use(cors())
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))