import GrandFather from "./grand-father.jsx";
import {useState} from "react";

const PropsDrilling = () => {
    const [state, setState] = useState('Sample state')
    return (<>
            <GrandFather data={state}/>
        </>
    )
}