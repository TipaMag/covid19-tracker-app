import axios from 'axios'


const url = 'https://covid19.mathdro.id/api'

export const api = {
    async getData(country) {
        let modifiedURL = url
        if (country) {
            modifiedURL = `${url}/countries/${country}`
        }
        try {
            let { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(modifiedURL)
            return { confirmed, deaths, recovered, lastUpdate }
        } catch (err) {
            console.log(err)
        }
    },
    async getCountries() {
        try {
            let { data } = await axios.get(`${url}/countries`)
            let countries = data.countries.map((item) => item.name)
            return countries
        } catch (err) {
            console.log(err)
        }
    },
    async getDaily() {
        try {
            let { data } = await axios.get(`${url}/daily`)

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