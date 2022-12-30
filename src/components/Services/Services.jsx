import React, { useState } from 'react'
import './Services.css'

const Services = () => {

    const [toggleModal, setToggleModal] = useState(0)

    const toggleTab = (index) => {
        setToggleModal(index)
    }

  return (
    <div className='services section' id='services'>
        <h2 className='section-title'>Services</h2>
        <span className='section-subtitle'>What i offer</span>

        <div className="services-container container grid">
            <div className="services-content">
                <div>
                    <i className="uil uil-web-grid services-icon"></i>
                    <h3 className="services-title">Product <br /> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(1)}>
                    View More 
                    <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                <div className={toggleModal === 1 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close"
                        onClick={() => toggleTab(0)}
                        ></i>

                        <h3 className="services-modal-title">Product Designer</h3>
                        <p className="services-modal-description">
                        Each of the five units in the course presents a lesson, followed by progression questions to reinforce.
                        </p>

                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-arrow services-icon"></i>
                    <h3 className="services-title">UI/UX <br /> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(2)}>
                    View More 
                    <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                <div className={toggleModal === 2 ? "services-modal active-modal" : "services-modal"} >
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close"
                        onClick={() => toggleTab(0)}
                        ></i>

                        <h3 className="services-modal-title">UI/UX Designer</h3>
                        <p className="services-modal-description">
                        Each of the five units in the course presents a lesson, followed by progression questions to reinforce.
                        </p>

                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development.
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="services-content">
                <div>
                    <i className="uil uil-edit services-icon"></i>
                    <h3 className="services-title">Visual <br /> Designer</h3>
                </div>
                <span className="services-button" onClick={() => toggleTab(3)}>
                    View More 
                    <i className="uil uil-arrow-right services-button-icon"></i>
                </span>

                <div className={toggleModal === 3 ? "services-modal active-modal" : "services-modal"}>
                    <div className="services-modal-content">
                        <i className="uil uil-times services-modal-close"
                        onClick={() => toggleTab(0)}
                        ></i>

                        <h3 className="services-modal-title">Visual Designer</h3>
                        <p className="services-modal-description">
                        Each of the five units in the course presents a lesson, followed by progression questions to reinforce.
                        </p>

                        <ul className="services-modal-services grid">
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    Web page development
                                </p>
                            </li>
                            <li className="services-modal-service">
                                <i className="uil uil-check-circle services-modal-icon"></i>
                                <p className="services-modal-info">
                                    I develop the user interface.
                                </p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services