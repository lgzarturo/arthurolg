import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './common/ThemeContext.jsx'
import { initializeGTM } from './gtm'
import './index.css'

initializeGTM();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
