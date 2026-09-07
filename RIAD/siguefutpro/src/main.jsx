import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importaciones obligatorias de PrimeReact y PrimeIcons
import "primereact/resources/themes/lara-dark-indigo/theme.css"; // Tema oscuro coherente con tu diseño
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 