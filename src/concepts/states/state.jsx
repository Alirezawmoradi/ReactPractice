import {useState} from "react";

const State = () => {
    const [state, setState] = useState('');
    const [color, setColor] = useState('');
    const [number, setNumber] = useState(0);
    const handleState = (event) => {
        setState(event.target.value)
    }
    const handleColor = (color) => {
        setColor(color.target.value)
    }
    const handleIncrement = (increment) => {
        increment = number;
        increment += 1;
        setNumber(increment);
    }
    const handleReset = () => {
        setNumber(0)
    }
    const handleDecrement = (decrement) => {
        decrement = number;
        decrement -= 1;
        setNumber(decrement);
    }
    return (
        <>
            <div>
                <label htmlFor='state'>State Concept</label>
                <input onChange={handleState} id='state' type='text'/>
                <p>
                    State updated to
                    <strong>
                        {state}
                    </strong>
                </p>
            </div>
            <div>
                <label htmlFor='color'>Choose a color</label>
                <input onChange={handleColor} id='color' type='text'/>
                <p>
                    Color is ....
                    <strong style={{color: `${color}`}}>{color}</strong>
                </p>
            </div>
            <div>
                <p>Click button to increment</p>
                <p>{number}</p>
                <button onClick={handleIncrement}>Button +</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>Button -</button>
            </div>
        </>
    )
}
export default State;