const SearchProps = ({search, onSearch}) => {
    const handleProps = (event) => {
        onSearch(event)
    }
    return (
        <div>
            <label htmlFor='props'>Props Handling Component</label>
            <input value={search} onChange={handleProps} id='props' type='text'/>
            <p>{search}</p>
        </div>
    )
}
export default SearchProps;