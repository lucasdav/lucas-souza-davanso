import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/main.sass'
import MainContent from './pages/paginaPadrao';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>,
)
