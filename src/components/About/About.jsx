import React from 'react'
import './About.css'
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/amdad-cv.pdf"
import { aboutData } from '../../data/AboutData'

const About = () => {
  return (
    <div className="about section" id='about'>
        <h2 className='section-title'>About Me</h2>
        <span className='section-subtitle'>My introduction</span>

        <div className="about-container container grid">
            <img src={AboutImg} alt="" className='about-img' />

            <div className="about-data">
                <div className='about-info grid'>
                    {
                        aboutData.map((abInfo, index) => {
                            return (
                                <div className="about-box" key={index}>
                                    <span><abInfo.icon /></span>
                                    <h3 className="about-title">{abInfo.title}</h3>
                                    <span className="about-subtitle">{abInfo.quality}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <p className='about-description'>
                Each of the five units in the course presents a lesson, followed by progression questions to reinforce the lesson through active engagement with the bibliography, and a quiz. 
                </p>

                <a href={CV} className='btn btn-home' download>Download CV <i className="uil uil-file-alt"></i></a>
            </div>
        </div>
    </div>
  )
}

export default About