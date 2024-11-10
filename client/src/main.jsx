import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import AppState from './Components/Context/AppState'

createRoot(document.getElementById('root')).render(
  <AppState>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </AppState>
)
