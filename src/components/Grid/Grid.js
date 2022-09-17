import React from 'react'
import Slider2 from './Slider2'
import Shops from './Shops'



const Grid = () => {
    return (

        <>
            <hr />
            <div className='slide container'>

                <div className='align-items-start d-flex flex-column mt-3'>
                    <strong className='fs-5'>Best Rated Shops</strong>
                    <p>Shops rated 4 stars and above</p>
                </div>
                <Shops />
            </div>
            <Slider2 />
        </>


    )
}

export default Grid
