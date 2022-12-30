import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {

    const [toggleQuality, setToggleQuality] = useState(1)

    const toggleTab = (index) => {
        setToggleQuality(index)
    }

  return (
    <div className='qualifications section' id='qualification'>
        <h2 className='section-title'>Qualification</h2>
        <span className='section-subtitle'>My personal journey</span>

        <div className="qaqualifications-container container">
            <div className="qualifications-tabs">
                <div className={toggleQuality === 1 ? "qualifications-button btn-flex qualifications-active" : "qualifications-button btn-flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualifications-icon"></i>
                    Education
                </div>

                <div className={toggleQuality === 2 ? "qualifications-button btn-flex qualifications-active" : "qualifications-button btn-flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-suitcase-alt qualifications-icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualifications-sections">
                <div className={toggleQuality === 1 ? "qualifications-content qualifications-content-active" : "qualifications-content"}>
                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">Product Designer</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div></div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications-title">Air Director</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">Product Development</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div></div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications-title">UX Designer</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleQuality === 2 ? "qualifications-content qualifications-content-active" : "qualifications-content"}>
                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">Web Designer</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div></div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>

                        <div>
                            <h3 className="qualifications-title">Web Development</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">UI Expert</h3>
                            <span className="qualifications-subtitle">Spain-Institue</span>
                            <div className="qualifications-calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualification