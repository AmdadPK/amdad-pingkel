import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0smbzis', 'template_wztvh1v', form.current, 'xR7Oq9GW5snRz-HlR')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact section' id='contact'>
        <h2 className='section-title'>Get in touch</h2>
        <span className='section-subtitle'>Contact Me</span>

        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Talk to me</h3>

                <div className="contact-info">
                    <div className="contact-card">
                        <i className="uil uil-envelope-heart contact-card-icon"></i>
                        <h3 className="contact-card-title">E-mail</h3>
                        <span className="contact-card-data">info@gmail.com</span>
                        <a href="" className="contact-button">Write me 
                            <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>
                    </div>
                    <div className="contact-card">
                        <i className="uil uil-skype-alt contact-card-icon"></i>
                        <h3 className="contact-card-title">Skype</h3>
                        <span className="contact-card-data">pingkel_sb</span>
                        <a href="" className="contact-button">Write me 
                            <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>
                    </div>
                    <div className="contact-card">
                        <i className="uil uil-facebook-messenger-alt contact-card-icon"></i>
                        <h3 className="contact-card-title">Messenger</h3>
                        <span className="contact-card-data">amdad.pingkel</span>
                        <a href="" className="contact-button">Write me 
                            <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-content">
                <h3 className="contact-title">Write me ypur project</h3>

                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Insert your name" className='contact-form-input' />
                    <input type="email" name='user_email'  placeholder="Insert your email" className='contact-form-input' />
                    <textarea name='message' placeholder="Write your message" className='contact-form-textarea'></textarea>
                    <span className='contact-success-message'>{done && "Thank you for contact me!"}</span><br />
                    <input type="submit" value="Sand Message" className="btn contact-message-btn" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact