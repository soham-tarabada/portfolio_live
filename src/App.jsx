import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/portfolio_live' element={<Home/>}/>
        <Route path='/portfolio_live/about' element={<About/>}/>
        <Route path='/portfolio_live/contact' element={<Contact/>}/>
        <Route path='/portfolio_live/projects' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App