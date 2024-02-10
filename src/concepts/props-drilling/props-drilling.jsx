import GrandFather from "./grand-father.jsx";
import {useContext, useState} from "react";
import {AppContext, AppProvider} from "../app-context/app-context.jsx";

const PropsDrilling = () => {
    const {setState} = useContext(AppContext);
    setState('Sample')
    return (
        <>
            <GrandFather/>
        </>
    )
}