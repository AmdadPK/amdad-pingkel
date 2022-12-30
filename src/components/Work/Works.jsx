import React, { useEffect, useState } from 'react'
import { projectData, projectNav } from '../../data/ProjectData'
import WorkItems from './WorkItems'

const Works = () => {

    const [item, setItem] = useState({ name: 'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectData)
        }else {
            const newProject = projectData.filter((project) => {
                return project.category.toLowerCase() === item.name
            })
            setProjects(newProject)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index)
    }
 
  return (
    <>
        <div className="work-filters container">
            {
                projectNav.map((nav, index) => {
                    return (
                        <span 
                            onClick={(e) => {
                                handleClick(e, index);
                            }} 
                            className={`${active === index ? 'active-work' : ''} work-item`} 
                            key={index}
                        >
                            {nav.name}
                        </span>
                    )
                })
            }
        </div>

        <div className="work-container container grid">
            {projects.map((item) => (
                <WorkItems item={item} key={item.id} />
            ))}
        </div>
    </>
  )
}

export default Works