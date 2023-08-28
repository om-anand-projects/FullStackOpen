const CountryDetail = ({ country }) => {
  if (country === null) {
    return null
  }

  const languages = []
  Object.keys(country.languages).forEach((key,index) => languages.push(country.languages[key]))
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital
        <ul>{country.capital.map(capital => <li key={capital}>{capital}</li>)}</ul>
      </div>
      <div>area {country.area}</div>
      <br/>
      <h2>languages</h2>
      <ul>{languages.map(language => <li key={language}>{language}</li>)}</ul>
      <br/>
      <img src={country.flags.svg} width='180' height='auto'/>
    </>
  )
}

export default CountryDetail