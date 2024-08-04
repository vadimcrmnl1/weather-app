const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')

//Init cache
let cache = apicache.middleware

//Env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

router.get('/weather/1day/:id', cache('10 minutes'), async (req, res) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query
        })
        const id = req.params.id
        const apiRes = await needle('get', `${API_BASE_URL}forecasts/v1/daily/1day/${id}?${params}`)
        const data = apiRes.body

        //Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_URL}forecasts/v1/daily/1day/${id}?${params}`)
        }
        // res.header('Access-Control-Allow-Origin', '*')
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({e})
    }
})
router.get('/weather/5day/:id', cache('10 minutes'), async (req, res) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query
        })
        const id = req.params.id
        const apiRes = await needle('get', `${API_BASE_URL}forecasts/v1/daily/5day/${id}?${params}`)
        const data = apiRes.body

        //Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_URL}forecasts/v1/daily/5day/${id}?${params}`)
        }
        // res.header('Access-Control-Allow-Origin', '*')
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({e})
    }
})
router.get('/location/:q', cache('10 minutes'), async (req, res) => {
    try {
        const q = req.params.q
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE, q,
            ...url.parse(req.url, true).query
        })
        console.log('params:', params)
        const apiRes = await needle('get', `${API_BASE_URL}locations/v1/cities/search?${params}`)
        const data = apiRes.body
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_URL}locations/v1/cities/search?${params}`)
        }
        res.status(200).json(data)
    }
    catch (e) {
        res.status(500).json({e})
    }
})


module.exports = router
