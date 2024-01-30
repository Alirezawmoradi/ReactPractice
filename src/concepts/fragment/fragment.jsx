//we can use fragment instead of <div> tag to prevent extra rendering
import {useState} from "react";
const Fragment = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }
    return (
        <>
            <label htmlFor='fragment'>useStorageState Hook</label>
            <input onChange={handleSearch} type='text' id='fragment'/>
            <p>{searchTerm}</p>
        </>
    )
}