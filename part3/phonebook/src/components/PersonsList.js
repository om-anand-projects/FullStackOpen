import Person from "./Person"

const PersonsList = ({ persons, handleDeleteClick }) => {
  return (
    <ul>
      {persons.map(person =>
        <Person key={person.id} person={person} handleDeleteClick={() => handleDeleteClick(person.id)}/>)
      }
    </ul>
  )
}

export default PersonsList