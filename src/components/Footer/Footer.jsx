import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container container">
            <h1 className="footer-title">Amdad</h1>

            <ul className="footer-list">
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#qualification" className="footer-link">Qualification</a></li>
                <li><a href="#testimonial" className="footer-link">Testimonial</a></li>
            </ul>

            <div className="footer-social">
                <a href="https://www.instagram.com" className='footer-social-icon' target="-blank"><i className='bx bxl-instagram-alt'></i></a>
                <a href="https://twitter.com" className='footer-social-icon' target="-blank"><i className='bx bxl-twitter'></i></a>
                <a href="https://github.com" className='footer-social-icon' target="-blank"><i className='bx bxl-github'></i></a>
            </div>

            <span className="footer-copy">&#169; Crypticalcoder. All rigths reserved</span>
        </div>
    </div>
  )
}

export default Footer