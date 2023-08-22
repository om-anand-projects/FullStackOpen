import { useState } from 'react'
const Input = ({ inputName, inputValue, onChange }) => {
  return (
    <div>
      {inputName}: <input value={inputValue} onChange={onChange} />
    </div>
  )
}

const PersonsList = ({ persons }) => {
  return (
    <>
      {persons.map(person => <div key={person.name}>{person.name} {person.number} </div>)}
    </>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = { name: newName, number: newNumber }
    // console.log(persons, newPerson, persons.includes(newPerson) )
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <Input inputName="name" inputValue={newName} onChange={handleNewNameChange} />
        <Input inputName="number" inputValue={newNumber} onChange={handleNewNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonsList persons={persons}/>
    </div>
  )
}

export default App