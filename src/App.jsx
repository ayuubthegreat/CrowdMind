import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Navbar from './assets/navbar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
