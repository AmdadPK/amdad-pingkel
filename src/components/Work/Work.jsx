import React from 'react'
import './Work.css'
import Works from './Works'

const Work = () => {
  return (
    <div className="work section" id="portfolio">
        <h2 className='section-title'>Portfolio</h2>
        <span className='section-subtitle'>Most recent work</span>

        <Works />
    </div>
  )
}

export default Work