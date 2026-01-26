import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './NavBar/Navbar'
import Home from './NavBar/Home'
import { Routes, Route } from 'react-router-dom'   
import AboutPage from './NavBar/AboutPage'
import Footer from './Footer/Footer'

function App() {
 

  return (
    <>
       <Navbar />
      
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>

      <Footer/>
      
  

    </>
  )
}

export default App
