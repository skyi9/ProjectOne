import React from 'react'
import slide3 from '../images/slide3.jpg'

const CardItem2 = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center" style={{ height: '12rem', width: "100%" }}>
                <img className='mt-2 mb-2' style={{ height: '10rem', width: '100%' }} src={slide3} alt="..." />
                <h5 className='mb-1'>Card title</h5>
            </div>
        </div>
    )
}

export default CardItem2
