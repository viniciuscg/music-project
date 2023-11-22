import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { DeezerProvider } from './Context/DeezerContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <DeezerProvider>
      <App />
    </DeezerProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
