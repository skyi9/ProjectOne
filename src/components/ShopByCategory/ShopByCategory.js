import React from 'react'
import Content from './Content'
import Products2 from './Products2'
import { Link } from 'react-router-dom'

const ShopByCategory = () => {
    return (
        <>
            <hr />
            <div className='slide container mb-4'>

                <div className='align-items-start d-flex flex-column mt-3'>
                    <strong className='fs-5'>Shop By Category</strong>
                </div>
                <Link to='/categories' className='text-decoration-none text-dark'>
                    <div className='d-flex justify-content-end mb-2'>
                        <strong className='fs-5 me-2'>See All</strong>
                        <div className='d-flex align-items-center pe-2'>
                            <i className="fa-solid fa-circle-arrow-right" style={{ color: '#0e62ab' }}></i>
                        </div>
                    </div>
                </Link>
                <Products2 />
            </div>
            <hr />
            <Content />
        </>
    )
}

export default ShopByCategory
