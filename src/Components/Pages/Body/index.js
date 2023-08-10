import React from 'react'
import './index.css'
import shoes from '../../Images/shoe_image.png'
import amazonLogo from '../../Images/amazon.png'
import flipKart from '../../Images/flipkart.png'

const Body = () => {
    return (
        <div className='body-container'>
            <div className='body-boxes'>
                <div className='b-box1'>
                    <div className='text-box-1' >
                        <p className='text-box-1-text'>YOUR FEET
                            DESERVE
                            THE BEST
                        </p>
                    </div>
                    <div className='text-box-2'>
                        <div className='text-box-2-div'>
                            <p className='text-box-2-text'>
                                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                            </p>
                        </div>
                    </div>
                    <div className='b-box3-buttons'>
                        <div className='b-box3-button-1'>
                            <p className='text-box3-buttons-text-1'>Shop Now</p>
                        </div>
                        <div className='b-box3-button-2'>
                            <p className='text-box3-buttons-text-2'>Category</p>
                        </div>
                    </div>
                    <div className='text-box-4'>
                        <div>
                            <p className='text-box-4-text'>Also available On </p>
                        </div>
                        <div className='text-box-4-img'>
                            <div>
                                <img src={amazonLogo} className='amazonlogo-css' />
                            </div>
                            <div>
                                <img src={flipKart} className='flipkart-css' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='b-box2'>
                    <img src={shoes} className='b-box2-image-css' />
                </div>
            </div>
        </div>
    )
}

export default Body