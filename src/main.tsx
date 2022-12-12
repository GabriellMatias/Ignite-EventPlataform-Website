import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* para funcionar o useQuery no App.tsx */}
    <App />
  </React.StrictMode>,
)
