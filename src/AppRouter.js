import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Docs from './pages/docs'
import About from './pages/about'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default AppRouter