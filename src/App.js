import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import AppRouter from './AppRouter'

export default function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [mode, setMode] = useState(getMode);

  const changeMode = () => { setMode(!mode); }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))
  }, [mode])

  return (
    <div className={mode ? 'dark' : ''}>
      <Navbar darkMode={mode} changeTheme={changeMode} />
      <AppRouter />
    </div>
  )
}