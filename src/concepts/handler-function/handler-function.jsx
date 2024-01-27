const HandlerFunction = () => {
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <label htmlFor='handle'>Handler Function Concept</label>
            <input onChange={handleChange} type='text' id='handle'/>
        </div>
    )
}
export default HandlerFunction;