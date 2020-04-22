import React, { useState } from 'react'
import { Header, Cards, Chart, CountryPicker } from './components'
import { api } from './api/api'
import Preloader from './components/common/Preloader'

const App = () => {
  let [initial, setInitial] = useState(false)
  let [data, setData] = useState({
    data: [],
    country: ''
  })

  setTimeout(() => {
    setInitial(true)
  }, 2000);

  const onSelectCountry = async (country) => {
    let data = await api.getData(country)
    setData({ 
      data: data, 
      country: country 
    })
  }
  return (
    <div className="App">
      {!initial && <Preloader />}
      <Header />
      <Cards country={data.country} />
      <CountryPicker onSelectCountry={onSelectCountry} />
      <Chart data={data.data} country={data.country} />
    </div>
  );
}

export default App
