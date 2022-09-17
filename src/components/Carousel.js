import React from 'react'
import slide1 from '../images/slide1.jpg'
import slide2 from '../images/slide2.jpg'
import slide3 from '../images/slide3.jpg'
import next from '../images/forward.png'
import prev from '../images/backward.png'

const Carousel = () => {
    return (
        <div >
            <div id="carouselExampleControls" className="card carousel slide p-3" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100 " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <img src={prev} alt="" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <img src={next} alt="" />

                </button>
            </div>
        </div>
    )
}

export default Carousel
