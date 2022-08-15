import { useState } from 'react'

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(person =>
        <li key={person.id}>{person.name} {person.number}</li>)
      }
    </ul>
  )
}

const Filter = ({value, onChange}) => {
  return (
    <div>
      filter shown with <input value={value} onChange={onChange}/>
    </div>
  )
}
const Input = ({input, handleChange}) => {
  return (
    <div>
      {input.text}: <input value={input.value} onChange={(event) => handleChange(event, input.setValue)} />
    </div>
  )
}

const PersonForm = ({onSubmit, inputs}) => {
  return (
    <form onSubmit={onSubmit}>
      {inputs.inputValues.map( input => 
        <Input key={input.text} input={input} handleChange={inputs.handleChange} />
      )}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
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
  const [filterValue, setFilterValue] = useState('')

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
      <Persons persons={filteredResults} />
    </div>
  )
}

export default App