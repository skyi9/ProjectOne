import React from 'react'
import background from '../images/background.jpg'
import Slider from './Slider'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
            <Navbar />
            <img style={{ height: '25rem', width: '100%', objectFit: 'cover' }} src={background} alt="" />
            <Slider />
        </>
    )
}

export default Header