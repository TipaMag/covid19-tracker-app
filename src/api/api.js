import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://covid19.mathdro.id/api'
})

export const api = {
    async getData() {
        try {
            let { data: {confirmed, deaths, recovered, lastUpdate} } = await instance.get()
            return {confirmed, deaths, recovered, lastUpdate}
        } catch(err) {
            console.log(err)
        }
    },
    async getCountries() {
        try {
            let { data } = await instance.get('/countries')
            let countries = data.countries.map((item) => item.name)
            return countries
        } catch(err) {
            console.log(err)
        }
    },
    async getDaily() {
        try {
            let { data } = await instance.get('/daily')

            let dailyData = data.map((daily) => ({
                confirmed: daily.confirmed.total,
                deaths: daily.deaths.total,
                date: daily.reportDate
            }))
            return dailyData
        } catch (err) {
            console.log(err)
        }
    }
}