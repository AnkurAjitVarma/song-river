import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logo from "./components/Logo.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Logo fontSize='3rem' />
  </StrictMode>,
)
