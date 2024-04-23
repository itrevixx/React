import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './01Falacias/App.jsx'
import GlobalStyle from './app/styles.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
