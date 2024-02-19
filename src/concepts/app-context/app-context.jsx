import {createContext, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, setState] = useState()
    return (
        <AppContext value={{state, setState}}>
            {children}
        </AppContext>
    )
}

export {AppContext, AppProvider}