import React from 'react'
import Social from './Social'
import './Home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <div className='section home-section' id='home'>
        <div className="container home-container grid">
            <div className="home-content grid">
                <Social />

                <div className="home-img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </div>
  )
}

export default Home