import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FerzaApp } from './FerzaApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FerzaApp/>
  </StrictMode>,
)
