import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserProvider'
import Toolbar from './components/Toolbar.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <UserProvider>
            <Toolbar />
            <App />
        </UserProvider>
    </>
)
