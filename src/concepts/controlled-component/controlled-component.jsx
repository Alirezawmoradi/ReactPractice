import {useState} from "react";

const ControlledComponent = () => {
    const [controlled, setControlled] = useState('React')
    const handleControlled = (event) => {
        setControlled(event.target.value);
    }
    return (
        <div>
            <label htmlFor='controlled'>Controlled Component</label>
            <input value={controlled} onChange={handleControlled} id='controlled' type='text'/>
            <p>{controlled}</p>
        </div>
    )
}
export default ControlledComponent;