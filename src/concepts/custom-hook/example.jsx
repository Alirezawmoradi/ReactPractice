import useStorageState from "./useStorageState.jsx";

const Example = () => {
    const [searchTerm, setSearchTerm] = useStorageState('example', '');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div>
            <label htmlFor='example'>Save last search in local storage using SideEffects</label>
            <input onChange={handleSearch} value={searchTerm} type='text' id='example'/>
            <p>{searchTerm}</p>
        </div>
    )
}