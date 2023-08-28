import CountryDetail from "./CountryDetail"
import { useEffect, useState } from "react"


const Display = ({ countries }) => {
  if (countries.length > 10) {
    return (
      <>
        <div>Too many matches, specify another filter</div>
      </>
    )
  }
  else if (countries.length === 1) {
    return <CountryDetail country={countries[0]} />
  }
  else {
    const countryDisplayedInitializer = {}
    Object.keys(countries).forEach((key, index) => countryDisplayedInitializer[countries[key].name.common] = false)

    const [countryDetails, setCountryDetails] = useState({})

    const handleClick = (key) => {
      const updateCountryDetails = { ...countryDetails, [key]: !countryDetails[key] }
      setCountryDetails(updateCountryDetails)
    }

    return (
      <>
        {countries.map(country =>
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleClick(country.name.common)}>
              {countryDetails[country.name.common] ? 'hide' : 'show'}
            </button>
            <CountryDetail country={countryDetails[country.name.common] ? country : null} />
          </div>
        )}
      </>
    )
  }
}

export default Display