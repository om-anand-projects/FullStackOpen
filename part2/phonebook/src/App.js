import { useState } from 'react'

const Header = ({value}) => {
  return(
    <h2>{value}</h2>
  )
}

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
    //console.log('Event submit in addName ',event);

    const newPersonObject = { name: newName, number: newNumber, id: persons.length + 1 }
    //console.log('new name',newNameObject)
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
  
  return (
    <div>
      <Header value='Phonebook' />
      <Filter value={filterValue} onChange={(event) => handleNewInputChange(event, setFilterValue)} />
      <Header value='add a new' />
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(event) => handleNewInputChange(event, setNewName)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => handleNewInputChange(event, setNewNumber)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Header value='Numbers' />
      <Persons persons={filteredResults} />
    </div>
  )
}

export default App