import React, { useState } from 'react'
// import styled from 'styled-components'
import { Header, Cards, Chart, CountryPicker } from './components'
import { api } from './api/api'

const App = () => {
  let [data, setData] = useState({
    data: [],
    country: ''
  })

  const onSelectCountry = async (country) => {
    let data = await api.getData(country)
    setData({ 
      data: data, 
      country: country 
    })
  }
  return (
    <div className="App">
      <Header />
      <Cards country={data.country} />
      <CountryPicker onSelectCountry={onSelectCountry} />
      <Chart data={data.data} country={data.country} />
    </div>
  );
}

export default App
