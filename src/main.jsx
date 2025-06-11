import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
