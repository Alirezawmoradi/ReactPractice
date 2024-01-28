// when handle sends as a prop from parent to child changes to callback handler
import {useState} from "react";

const Children = ({handleCallback}) => {
    const [callback, setCallback] = useState('');
    const handleChange = (event) => {
        setCallback(event.target.value);
        handleCallback(event);
    }
    return (
        <div>
            <label htmlFor='callback'>Callback Function Concept</label>
            <input onChange={handleChange} id='callback' type='text'/>
            <p>
                Callback data is
                <strong>{callback}</strong>
            </p>
        </div>
    )
}
export default Children;