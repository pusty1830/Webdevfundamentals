import './all.css'
import {Link} from 'react-router-dom'

import React from 'react'

const Fotter = () => {
  return (
    <div>
       <footer className="footer">
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            
            <ul className="menu">
              <li className="menuitem"><Link className="menulink" to="/">Home</Link></li>
              <li className="menuitem"><Link className="menulink" to="/add">AddCalculator</Link></li>
              <li className="menuitem"><Link className="menulink" to="/">Multiply</Link></li>
        
            </ul>
            <p>&copy;2023 Calculator | All Rights Reserved</p>
          
    </footer>
    </div>
  )
}

export default Fotter
