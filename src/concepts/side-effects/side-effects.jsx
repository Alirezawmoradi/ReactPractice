// SideEffect is a function that operation affects outside the function
import {useEffect, useState} from "react";

const SideEffects = () => {
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem('SideEffect') || '')
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    useEffect(() => {
        localStorage.setItem('SideEffect', searchTerm)
    }, [searchTerm]);

    // UseEffect Hook describes lifecycle of a component
    // if Array is empty [] SideEffect runs just one time in first load of component
    // if SideEffect does not have second arg at all SideEffects runs in first load and when ever component render

    return (
        <div>
            <label htmlFor='SideEffect'>Save last search in local storage using SideEffects</label>
            <input onChange={handleSearch} value={searchTerm} type='text' id='SideEffect'/>
            <p>{searchTerm}</p>
        </div>
    )
}
export default SideEffects;