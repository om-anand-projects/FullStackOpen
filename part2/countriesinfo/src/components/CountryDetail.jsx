import { useEffect, useState } from "react"
import axios from 'axios'

const CountryDetail = ({ country }) => {
  const openWeatherMapAPIKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  const [temperature, setTemperature] = useState(0)
  const [wind, setWind] = useState(0)
  const [weatherIcon, setWeatherIcon] = useState(null)

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${openWeatherMapAPIKey}`)
      .then(response => {
        const lat = response.data[0]["lat"]
        const lon = response.data[0]["lon"]
        axios
          .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${openWeatherMapAPIKey}`)
          .then(response => {
            setTemperature(response.data["current"]["temp"].toFixed(2))
            setWind(response.data["current"]["wind_speed"].toFixed(2))
            // console.log(response.data["current"])
            setWeatherIcon(response.data["current"]["weather"][0]["icon"])
          })
      })
  }, [])

  const languages = []
  Object.keys(country.languages).forEach((key, index) => languages.push(country.languages[key]))
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <br />
      <h3>languages:</h3>
      <ul>{languages.map(language => <li key={language}>{language}</li>)}</ul>
      <br />
      <img src={country.flags.svg} width='180' height='auto' />
      <h2>Weather in {country.capital}</h2>
      <div>temperature {temperature} Celsius</div>
      <img  src={weatherIcon !== null? `https://openweathermap.org/img/wn/${weatherIcon}@2x.png` : null} />
      <div>wind {wind} m/s</div>
    </>
  )
}

export default CountryDetail