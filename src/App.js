import React, { useEffect, useState } from 'react'
import { api } from './api/api'

import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Cards from './components/Cards/Cards'


const App = () => {
  let [data, setData] = useState({})
  let [dailyData, setDailyData] = useState([])
  let [countries, setCountries] = useState([])
  let [selectCountry, setSelectCountry] = useState('')

  useEffect(() => {
    getData()
    getCountriesData()
    getDailyData()
  }, [])

  const getData = async () => {
    setData(await api.getData())
  }
  const getCountriesData = async () => {
    setCountries(await api.getCountries())
  }
  const getDailyData = async () => {
    setDailyData(await api.getDaily()) 
  }
  
  const onSelectCountry = (country) => {
    setSelectCountry(country)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Covid-19 tracker</h3>
      </header>
      <Cards data={data}/>
      <CountryPicker countries={countries} onSelectCountry={onSelectCountry}/>
      <Chart data={dailyData}/>
    </div>
  );
}

export default App
