import React from 'react'
import './Testimonial.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import profilePic1 from '../../assets/profile1.jpg'
import profilePic2 from '../../assets/profile2.jpg'
import profilePic3 from '../../assets/profile3.jpg'
import profilePic4 from '../../assets/profile4.jpg'
import profilePic5 from '../../assets/profile5.jpg'
import profilePic6 from '../../assets/profile6.jpg'

const Testimonial = () => {

    const clients = [
        {
            id: 1,
            image: profilePic1,
            name: "Jhon Doe",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..."
        },
        {
            id: 2,
            image: profilePic2,
            name: "Harry Clinton",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..."
        },
        {
            id: 3,
            image: profilePic3,
            name: "Jhon Doe",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..."
        },
        {
            id: 4,
            image: profilePic4,
            name: "Jhon Clinton",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..."
        },
        {
            id: 5,
            image: profilePic5,
            name: "Harry Doe",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..."
        },
        {
            id: 6,
            image: profilePic6,
            name: "Jhon Harry",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..."
        }
    ]


    return (
        <div className='testimonial section' id='testimonial'>
            <h2 className='section-title'>My Clint Saying</h2>
            <span className='section-subtitle'>Testimonial</span>

            <div className="testimonial-container container">
                {/* slider */}
            <Swiper
            modules={[Pagination]}
            // slidesPerView={2}
            // spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 48,
                },
              }}
            >
                {
                    clients.map((client) => {
                        return(
                            <SwiperSlide key={client.id}>
                                <div className='testimonial-content'>
                                    <img src={client.image} alt="" className='testimonial-img'/>
                                    <h3 className='testimonial-name'>{client.name}</h3>
                                    <p className='testimonial-message'>{client.message}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
        </div>
    )
}

export default Testimonial