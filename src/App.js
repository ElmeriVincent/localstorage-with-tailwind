import React from 'react';
import { useState, useEffect } from 'react'
import AppRouter from './AppRouter'

export default function App() {

  const getMode = () => { return JSON.parse(localStorage.getItem("mode")) || false }

  const [mode, setMode] = useState(getMode);

  const changeMode = () => { setMode(!mode); }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))
  }, [mode])

  //<Navbar darkMode={mode} changeTheme={changeMode} />

  return (
    <div className={mode ? 'dark' : ''}>
      <AppRouter />
    </div>
  )
}