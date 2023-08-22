import { useState } from 'react'
const Input = ({ inputText, inputValue, onChange }) => {
  return (
    <div>
      {inputText}: <input value={inputValue} onChange={onChange} />
    </div>
  )
}

const Filter = ({ searchText, handleChange }) => {
  return (
    <>
      < Input inputText="filter shown with " inputValue={searchText} onChange={handleChange} />
    </>
  )
}

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, submitAction }) => {
  return (
    <>
      <form onSubmit={submitAction}>
        <Input inputText="name" inputValue={newName} onChange={handleNameChange} />
        <Input inputText="number" inputValue={newNumber} onChange={handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map(person => <div key={person.name}>{person.name} {person.number} </div>)}
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')

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
  const handleNewSearchTextChange = (event) => setSearchText(event.target.value)

  const filteredPersons = () => {
    return persons.filter(person => person.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} handleChange={handleNewSearchTextChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNewNameChange} handleNumberChange={handleNewNumberChange} submitAction={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons()} />
    </div>
  )
}

export default App