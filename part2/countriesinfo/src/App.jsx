import { useEffect, useState } from "react"
import axios from 'axios'
import Display from "./components/Display"

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() =>{
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  },[])

  const onChange = (event) => setFilter(event.target.value)

  const filteredCountries = () => {
    return countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  }

  return (
    <>
    <div>find countries <input onChange={onChange}></input></div>
    <Display countries={filteredCountries()}/>    
    </>
  )
}

export default App
