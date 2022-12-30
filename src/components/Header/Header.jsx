import React, { useState } from 'react'
import './Header.css'

const Header = () => {

  const [selected, setSelected] = useState(1)

  const [toggle, setToggle] = useState(false)

  return (
    <div className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav-logo'>Amdad</a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list flex">
            <li className="nav-item">
              <a href="#home" className={selected === 1 ? 'active-link' : ''} onClick={() => setSelected(0)}><i className="uil uil-estate nav-icon"></i>  Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className={selected === 2 ? 'active-link' : ''} onClick={() => setSelected(2)}><i className="uil uil-user nav-icon"></i> About</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className={selected === 3 ? 'active-link' : ''} onClick={() => setSelected(3)}><i className="uil uil-file-contract nav-icon"></i> Skills</a>
            </li>
            <li className="nav-item">
              <a href="#services" className={selected === 4 ? 'active-link' : ''} onClick={() => setSelected(4)}><i className="uil uil-bag-alt nav-icon"></i> Services</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className={selected === 5 ? 'active-link' : ''} onClick={() => setSelected(5)}><i className="uil uil-scenery nav-icon"></i> Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={selected === 6 ? 'active-link' : ''} onClick={() => setSelected(6)}><i className="uil uil-forward nav-icon"></i> Contact</a>
            </li>
          </ul>

          <i className="uil uil-times nav-close" onClick={() => setToggle(!toggle)}></i>
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-create-dashboard"></i>
        </div>
      </nav>
    </div>
  )
}

export default Header