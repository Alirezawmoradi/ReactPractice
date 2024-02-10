import {createContext, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [state, setState] = useState()
    return (
        <AppProvider value={{state, setState}}>
            {children}
        </AppProvider>
    )
}

export {AppContext, AppProvider}