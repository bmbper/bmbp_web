import { createRoot } from 'react-dom/client'
import "@arco-design/web-react/dist/css/arco.css";
import './scss/index.scss'
import App from './App.tsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App/>
  </StrictMode>
)
