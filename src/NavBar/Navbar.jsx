import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <div className="Nav">
          <Link to="/home" activeclassname="active"> 🏠 Home</Link>
          <Link to="/about" activeclassname="active">📚 About</Link>
        </div>
    </div>
  )
}
