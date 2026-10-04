import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PowerBladeApp } from './PowerBladeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PowerBladeApp />
  </StrictMode>,
)
