import SearchProps from "./search-props.jsx";
import {useState} from "react";

const PropsHandling = () => {
    const [searchTerm, setSearchTerm] = useState('React')
    const handleProps = (event) => {
        setSearchTerm(event.target.value)
    }
    return (
        <SearchProps onSearch={handleProps} search={searchTerm}/>
    )
}
export default PropsHandling;