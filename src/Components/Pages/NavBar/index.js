import React from 'react'
import Nike from '../../Images/brand_logo.png'
import './index.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
        <div className='navbar-box'>
            <div className='box-1'>
                <img src={Nike} className='image-css' />
            </div>
            <div className='box-2'>
                <h4>MENU</h4>
                <h4>LOCATION</h4>
                <h4>ABOUT</h4>
                <h4>CONTACT</h4>
            </div>
            <div className='box-3'>
                <div className='box-3-button'>
                    <p>Log in</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default NavBar