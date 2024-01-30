import useStorageState from "./useStorageState.jsx";
import useColorState from "./useColorState.jsx";

const CustomHook = () => {
    const [searchTerm, setSearchTerm] = useStorageState('example', '');
    const [color, setColor] = useColorState('red');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleColor = (color) => {
        setColor(color.target.value)
    }
    return (
        <>
            <div>
                <label htmlFor='useStorageState'>useStorageState Hook</label>
                <input onChange={handleSearch} value={searchTerm} type='text' id='useStorageState'/>
                <p>{searchTerm}</p>
            </div>
            <div>
                <label htmlFor='useColor'>useColor Hook</label>
                <input onChange={handleColor} id='useColor' type='text'/>
                <p>
                    Color is ....
                    <strong style={{color: `${color}`}}>{color}</strong>
                </p>
            </div>
        </>
    )
}
export default CustomHook;