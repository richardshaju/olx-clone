import React from 'react'
import './Footer.css'
function Footer() {
    var today = new Date()
    var year = today.getFullYear()
    return (
        <div className='footer'>
            <div className='about'>
                <div className="column">
                    <span>POPULAR LOCTAIONS</span>
                    <p>Kolkata</p>
                    <p>Mumbai</p>
                    <p>Chennai</p>
                    <p>Pune</p>
                </div>
                <div className="column">
                    <span>TRENDING LOCTAIONS</span>
                    <p>Bhubaneshwar</p>
                    <p>Hyderbad</p>
                    <p>Chandigrah</p>
                    <p>Nasik</p>
                </div>
                <div className="column">
                    <span>ABOUT US</span>
                    <p>About OLX group</p>
                    <p>Careers</p>
                    <p>Contact us</p>
                    <p>OLX Pepole</p>
                    <p>Waah Jobs</p>
                </div>
                <div className="column">
                    <span>OLX</span>
                    <p>Help</p>
                    <p>Sitemap</p>
                    <p>Legal & Privacy information </p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="copyright">
                <p><span> Other Countries</span> Pakistan - South Africa - Indonesia</p>
                <p>All rights reserved © 2006-{year} OLX</p>
            </div>
        </div>
    )
}

export default Footer