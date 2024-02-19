import {useEffect, useState} from "react";

export const BatchStateUpdate = () => {
    console.log('render');
    const [name, setName] = useState();
    const updateState = () => {
        setName('Ali');
        setName('Hamid');
        setName('Kamyab');
        setName('Reza');
    }

    useEffect(() => {
        setName('Alireza')
    }, [])
    return (
        <>
            <span>{name}</span>
            <button onClick={updateState}>update state</button>
        </>
    )
}