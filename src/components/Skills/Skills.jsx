import React from 'react'
import { skillsData } from '../../data/SkillsData'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills section' id='skills'>
        <h2 className='section-title'>Skills</h2>
        <span className='section-subtitle'>My technical level</span>

        <div className="skills-container container grid">
            {
                skillsData.map((skill, index) => (
                    <div className="skills-content" key={index}>
                        <h3 className="skills-title">{skill.title}</h3>
                        <div className="skills-group">
                            {
                                skill.group.map((gpSkill, gpIndex) => (
                                    <div className="skills-data" key={gpIndex}>
                                        <span><gpSkill.gpicon /></span>
                                        <div>
                                            <h3 className="skills-name">{gpSkill.gptitle}</h3>
                                            <span className="skills-level">{gpSkill.gplevel}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            } 
        </div>
    </div>
  )
}

export default Skills