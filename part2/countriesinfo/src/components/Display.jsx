import CountryDetail from "./CountryDetail"
import { useState } from "react"


const Display = ({ countries, handleClick }) => {
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
    return (
      <>
        {countries.map(country =>
          <div key={country.name.common}>
            {country.name.common}
            <button value={country.name.common} onClick={handleClick}>show</button>
          </div>
        )}
      </>
    )
  }
}

export default Display