// Send data from children to parent component
import Children from "./children.jsx";

const CallbackHandler = () => {
    const handleCallback = (event) => {
        console.log(event.target.value);
    }
    return (
        <Children handleCallback={handleCallback}/>
    )
}
export default CallbackHandler;