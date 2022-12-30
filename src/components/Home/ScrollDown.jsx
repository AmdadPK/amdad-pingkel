import React from 'react'
import { BsMouse } from 'react-icons/bs'

const ScrollDown = () => {
  return (
    <div className='home-scroll'>
        <a href="#about" className='btn-home-scroll'>
            <BsMouse />
            <span>Scroll down </span>
            <i className="uil uil-arrow-down wheel home-scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown