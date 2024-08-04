import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://dataservice.accuweather.com/',
    baseURL: 'http://localhost:5000',
    params: {
        // apikey: '9U0qCt2izCp0abum5m7r08woyOf3HYwK'
    },
    headers: {
        // "Access-Control-Allow-Origin": "*",
        // 'Content-Type': 'application/json',
        // "Access-Control-Allow-Headers": "*",
    },
})

export const getWeather = {
    oneDay(id: number) {
        // return instance.get(`/daily/${id}`)
        return instance.get(`/weather/1day/${id}`)
    },
    fiveDays(id: number) {
        // return instance.get(`/daily/${id}`)
        return instance.get(`/weather/5day/${id}`)
    },
}
export const getLocations = {
    getRegions() {
        return instance.get('locations/v1/regions')
    },
    searchCity(q: string) {
        // @ts-ignore
        return instance.get(`/location/${q}`)
    }
}