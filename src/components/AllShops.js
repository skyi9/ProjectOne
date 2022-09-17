import React from 'react'
import Shops from './Grid/Shops'
import Navbar from './Header/Navbar'

const AllShops = () => {
    return (
        <>
            <Navbar />
            <div className='slide container' style={{ marginTop: '7rem' }}>
                <form className="d-flex" role="search" style={{ marginBottom: '2rem' }}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <Shops />
            </div>
        </>
    )
}

export default AllShops
