import { useState } from 'react'

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map( person =>
        <li key={person.name}>{person.name}</li>)
      }
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()
    //console.log('Event submit in addName ',event);
    
    const newNameObject = { name: newName}
    //console.log('new name',newNameObject)
    if (persons.find(person => person.name === newNameObject.name))
      alert(`${newNameObject.name} is already added to phonebook`)
    else {
      setPersons(persons.concat(newNameObject))
      setNewName('')
    }
  }


  const handleNewNameChange = (event) => {
    //console.log('Event onchange in button ',event);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App