import Input from "./input"
const Filter = ({ searchText, handleChange }) => {
    return (
        <>
            < Input inputText="filter shown with " inputValue={searchText} onChange={handleChange} />
        </>
    )
}

export default Filter