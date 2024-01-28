const Search = ({onSearch}) => {
    const handleChange = (event) => {
        onSearch(event)
    }
    return (
        <div>
            <label htmlFor='lifting'>Lifting State Concept</label>
            <input onChange={handleChange} id='lifting' type='text'/>
        </div>
    )
}
export default Search;