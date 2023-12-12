import './all.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
         <header className="navbar">
        <div className="navmenu">
            <div className="left">
                <h3>Calculator Fundamentals</h3>
            </div>
            <div className="right">
                <ul className="ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">AddCalculator</Link></li>
                    <li><Link to="/">Multiply</Link></li>
                </ul>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Navbar
