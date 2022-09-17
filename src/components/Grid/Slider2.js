import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import slide2 from '../images/slide2.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import Slider from '../Header/Slider';
import { Link } from 'react-router-dom';


const Slider2 = () => {

    return (
        <>

            <Slider />
            <hr />
            <div className='slide container'>
                <div className='align-items-start d-flex flex-column mt-3'>
                    <strong className='fs-5'>All Shops Near You</strong>
                </div>
                <Link to='allshops' className='text-decoration-none text-dark'>
                    <div className='d-flex justify-content-end mb-2'>

                        <strong className='fs-5 me-2'>See All</strong>
                        <div className='d-flex align-items-center pe-2'>
                            <i className="fa-solid fa-circle-arrow-right" style={{ color: '#0e62ab' }}></i>
                        </div>

                    </div>
                </Link>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    navigation={true}
                    keyboard={true}
                    modules={[Navigation]}
                    className="mySwiper mb-5 slider2-width"
                >
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                </Swiper>

            </div>

        </>

    )
}

export default Slider2
