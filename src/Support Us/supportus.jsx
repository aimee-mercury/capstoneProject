import React from 'react'
import image from '../assets/florencia-viadana-1J8k0qqUfYY-unsplash (1) 1.jpg'
import image1 from '../assets/clay-banks-GX8KBbVmC6c-unsplash 1.jpg'
import image2 from '../assets/istockphoto-1495321240-2048x2048 1.jpg'
import './supportus.css'

function Supportus() {
  return (
    <>
    <div className='supportus-section'>
      <div className='supportus-first-section'>
        <div className='support-image1'><img src={image} alt="" /></div>
        <div>
            <h3>Giving to your Wisdom Library</h3>
            <p>Our collections are extraordinary. Your support can help us share them.</p>
        </div>
      </div>
      <div className='supportus-second-section'>
        <div className='first-section'>
        <div className='support-image2'><img src={image1} alt="" /></div>
        <div className='supportus-image-titles'>
            <h3>Become a volunteer</h3>
            <p>The Volunteer program offers you an <br /> opportunity to play an active role in <br /> supporting and promoting the  work <br /> of the Library.</p>
        </div>
        </div>
        <div className='second-section'>
        <div className='support-image3'><img src={image2} alt="" /></div>
        <div className='supportus-image-titles2'>
            <h3>Become a friend</h3>
            <p>The Friends of the Wisdom Library <br /> share a passion for the Library <br /> and its collections.</p>
        </div>
        </div>
      </div>
      <div className='supportus-button'>
        <button>Support Us</button>
      </div>
    </div>
    </>
  )
}

export default Supportus
