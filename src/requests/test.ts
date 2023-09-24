const axios = require('axios');
const dotenv = require('dotenv').config({ path: '../../.env' })

const url = 'https://api.tomorrow.io'
const endpoint = '/v4/weather/realtime?location='
const city_name = 'rio de janeiro'

axios.get(`${url}${endpoint}${city_name}&apikey=${dotenv.parsed.API_KEY}`)
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log('nao funcionou')
    })