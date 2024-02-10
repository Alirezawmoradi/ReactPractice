import {useContext} from "react";
import {AppContext} from "../app-context/app-context.jsx";

const GrandSon = () => {
    const {state} = useContext(AppContext);
    return (
        <h1>{state}</h1>
    )
}