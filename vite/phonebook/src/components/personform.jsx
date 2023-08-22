import Input from "./input"
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
export default PersonForm