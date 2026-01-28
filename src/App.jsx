import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar/Navbar'
import Home from './NavBar/Home'
import { Routes, Route } from 'react-router-dom'   
import AboutPage from './NavBar/AboutPage'
import Footer from './Footer/Footer'
import Layout from './KhajaPages/Layout'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>

      <Footer/>
      
  

    </>
  )
}

export default App
