import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import DesignPortfolio from './pages/DesignPortfolio'
import CodePortfolio from './pages/CodePortfolio'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/design" element={<DesignPortfolio />} />
        <Route path="/code" element={<CodePortfolio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)