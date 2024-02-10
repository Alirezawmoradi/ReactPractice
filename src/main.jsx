import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from "./concepts/app-context/app-context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>,
)
