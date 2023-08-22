const Input = ({ inputText, inputValue, onChange }) => {
    return (
        <div>
            {inputText}: <input value={inputValue} onChange={onChange} />
        </div>
    )
}
export default Input  