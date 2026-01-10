import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import Navbar from './assets/navbar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login, Register } from './pages/login.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { checkForUserInfo } from './slices/authSlice.js'

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const {user, token} = useSelector((state) => state.auth);
  const mapIfAuthenticated = new Map([
    ["/posts", "Posts"]
  ])
  const mapIfNotAuthenticated = new Map([
    ["/login", "Sign In"]
  ])
  useEffect(() => {
    if (token && user === null) {
      console.log(user);
      dispatch(checkForUserInfo()).unwrap();
    }
  }, [])
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
