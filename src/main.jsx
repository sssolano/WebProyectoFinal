import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CatalogoNegocios from './componentes/CatalogoNegocios.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatalogoNegocios />
  </React.StrictMode>,
)
