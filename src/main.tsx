import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TeamProvider } from './lib/team'
import './styles/themes.css'
import './styles/global.css'
import './styles/components.css'
import 'leaflet/dist/leaflet.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TeamProvider>
      <App />
    </TeamProvider>
  </React.StrictMode>,
)
