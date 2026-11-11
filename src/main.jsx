import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/nav.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/projects.css'
import './styles/contact.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
