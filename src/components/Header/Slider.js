import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from '../images/slide1.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

import 'swiper/css';
const Slider = () => {
    return (
        <>
            <hr />
            <div className=' pt-3 pb-3' style={{ backgroundColor: 'lightgray' }}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    navigation={{
                        clickable: true,

                    }}

                    keyboard={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                </Swiper>
            </div >
        </>
    )
}

export default Slider
