import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FerzaApp } from './FerzaApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FerzaApp />
  </StrictMode>,
)
