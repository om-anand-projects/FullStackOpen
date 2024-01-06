import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonsList from './components/PersonsList'
import personService from './services/persons'
import { ErrorNotification, SuccessNotification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [notificationMessage, setNotificationMessage] = useState({ success: null, error: null })

  const getPersonsHook = () => {
    personService.getAll().then(data => setPersons(data))
  }
  useEffect(getPersonsHook, [])

  const addName = (event) => {
    event.preventDefault()
    //TODO: Check backend if person list is updated to avoid overlap (1+ browser scenario: 2 add with same name will create two rows)
    const newPersonObject = { name: newName, number: newNumber }
    const existingPerson = persons.find(person => person.name === newPersonObject.name)
    let successMessage = null
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newPersonObject.name} is already added to phonebook, replace the old number with a new one?`)
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newPersonObject.number }
        personService
          .update(updatedPerson)
          .then(data => {
            const updatedPersons = persons.map(person => person.id !== updatedPerson.id ? person : data)
            setPersons(updatedPersons)
            successMessage = `Updated ${updatedPerson.name}`
            triggerSuccessMessage(successMessage)
          })
          .catch(error => {
            const errorMessage = `Unable to update ${updatedPerson.name} details. Error: ${error.response.data.error}`
            triggerErrorMessage(errorMessage)
          })
      }
    }
    else {
      personService
        .create(newPersonObject)
        .then(data => {
          // console.log(persons.concat(response.data))
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
          successMessage = `Added ${newPersonObject.name}`
          triggerSuccessMessage(successMessage)
        })
        .catch(error => {
          const errorMessage = `Unable to create ${newPersonObject.name} record. Error: ${error.response.data.error}`
          triggerErrorMessage(errorMessage)
        })
    }
  }

  const triggerMessage = (updatedNotificationMessage) => {
    setNotificationMessage(updatedNotificationMessage)
    setTimeout(() => {
      setNotificationMessage( {success: null, error: null })
    }, 5000);
  }

  const triggerSuccessMessage = (message) => triggerMessage({ error: null, success: message })

  const triggerErrorMessage = (message) => triggerMessage({ error: message, success: null })

  const handleNewInputChange = (event, setValue) => {
    setValue(event.target.value)
  }

  const handleDeleteClick = (id) => {
    const deletePerson = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${deletePerson.name} ?`))
      personService
        .remove(id)
        .then(response => {
          const updatedPersons = persons.filter(person => person.id !== id)
          setPersons(updatedPersons)
        })
        .catch(error => {
          const errorMessage = `Information of ${deletePerson.name} has already been removed from the server`
          triggerErrorMessage(errorMessage)
          const updatedPersons = persons.filter(person => person.id !== id)
          setPersons(updatedPersons)
        })
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
      <SuccessNotification message={notificationMessage.success} />
      <ErrorNotification message={notificationMessage.error} />
      <Filter value={filterValue} onChange={(event) => handleNewInputChange(event, setFilterValue)} />
      <h3>Add a new</h3>
      <PersonForm onSubmit={addName} inputs={inputs} />
      <h3>Numbers</h3>
      <PersonsList persons={filteredResults} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}

export default App