const Input = ({ input, handleChange }) => {
  return (
    <div>
      {input.text}: <input value={input.value} onChange={(event) => handleChange(event, input.setValue)} />
    </div>
  )
}

const PersonForm = ({ onSubmit, inputs }) => {
  return (
    <form onSubmit={onSubmit}>
      {inputs.inputValues.map(input =>
        <Input key={input.text} input={input} handleChange={inputs.handleChange} />
      )}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm