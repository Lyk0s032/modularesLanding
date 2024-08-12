import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import CostaPanel from './components/panelRutas'
import NavPanel from './components/landing/nav'

function App() {
  
  return (
    <div className='app'>
      <div className='panel'>
            <Router>
                <NavPanel />
                <Routes>
                    <Route path="/*" element={<CostaPanel />} />
                </Routes>
            </Router>
        </div>
    </div>
  )
}

export default App
