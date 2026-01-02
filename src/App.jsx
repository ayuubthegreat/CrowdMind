import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Navbar from './assets/navbar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login, Register } from './pages/login.jsx'

function App() {
  const [count, setCount] = useState(0);
  const mapIfAuthenticated = new Map([
    ["/", "Home"],
  ])
  const mapIfNotAuthenticated = new Map([
    ["/login", "Sign In"]
  ])
  return (
    <>
      <Navbar mapIfAuthenticated={mapIfAuthenticated} mapIfNotAuthenticated={mapIfNotAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
