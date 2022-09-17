import React from 'react'
import { useNavigate } from 'react-router-dom'
import slide3 from '../images/slide3.jpg'


const CardItem = () => {
    const navigate = useNavigate()
    const shopdetails = () => {
        navigate('/shopdetails')
    }
    return (
        <>

            <div onClick={shopdetails} className="d-flex flex-row align-items-center" style={{ height: '10rem', width: "100%" }}>
                <div className='me-3'>
                    <img className='p-2' style={{ height: '9rem', width: '8rem', border: '.3px solid lightgrey' }} src={slide3} alt="..." />
                </div>
                <div className='d-flex flex-column align-items-start' style={{ width: '90%', borderBottom: '.3px solid lightgrey' }}>
                    <h5 className='mb-1'>Card title</h5>
                    <p className='mb-2'>Grocery | 1 kms</p>
                    <p className='mb-2' >Tommorow</p>
                </div>
            </div>

        </>

    )
}

export default CardItem
