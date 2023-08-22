import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const getPersonsHook = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(getPersonsHook, [])

  const addName = (event) => {
    event.preventDefault()

    const newPersonObject = { name: newName, number: newNumber, id: persons.length + 1 }

    if (persons.find(person => person.name === newPersonObject.name))
      alert(`${newPersonObject.name} is already added to phonebook`)
    else {
      setPersons(persons.concat(newPersonObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewInputChange = (event, setValue) => {
    setValue(event.target.value)
  }

  const filteredResults = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()))

  const inputs = {
    handleChange: handleNewInputChange,
    inputValues: [
      {
        text: 'name',
        value: newName,
        setValue: setNewName
      },
      {
        text: 'number',
        value: newNumber,
        setValue: setNewNumber
      }
    ]
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterValue} onChange={(event) => handleNewInputChange(event, setFilterValue)} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} inputs={inputs} />
      <h3>Numbers</h3>
      <PersonsList persons={filteredResults} />
    </div>
  )
}

export default App