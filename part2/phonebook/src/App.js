import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const getPersonsHook = () => {
    personService.getAll().then(data => setPersons(data))
  }
  useEffect(getPersonsHook, [])

  const addName = (event) => {
    event.preventDefault()

    const newPersonObject = { name: newName, number: newNumber, id: persons.length + 1 }

    if (persons.find(person => person.name === newPersonObject.name))
      alert(`${newPersonObject.name} is already added to phonebook`)
    else {
      personService
        .create(newPersonObject)
        .then(data => {
          // console.log(persons.concat(response.data))
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNewInputChange = (event, setValue) => {
    setValue(event.target.value)
  }

  const handleDeleteClick = (id) => {
    const deletePerson = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${deletePerson.name} ?`))
    personService.remove(id).then(response => {
      const updatedPersons = persons.filter(person => person.id !== id)
      setPersons(updatedPersons)
    }
    )
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
      <PersonsList persons={filteredResults} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}

export default App