import React, { useState } from 'react'
import Arrow from '../assets/Arrow'
import OlxLogo from '../assets/Olx-logo'
import Search from '../assets/Search'
import SellButton from '../assets/sellButton'
import SellButtonPlus from '../assets/sellPlus'

import './Navbar.css'

function Navbar() {
    const [condition, setcondition] = useState(false)

    function show() {
        condition ? setcondition(false) : setcondition(true)
        console.log("Worked")

    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <OlxLogo />
            </div>
            <div className='dropdown'>
                <div className="options" >
                        <div className='locations'>
                            <span>POPULAR LOCATIONS</span>
                            <hr />
                            <div className='list'>
                                <p>Kerela</p>
                                <p>Chennai</p>
                                <p>Punjab</p>
                                <p>Mumbai</p>
                            </div>
                        </div>
                    </div>
                <div className='country-search' >
                     
                    <Search fill="#00000" width="18px"></Search>
                    <input disabled type="text" placeholder="Search city, area or locality" value={"Richard"} />
                    <span onClick={show} className={condition ? "arrow" :'default'}>
                        <Arrow />
                    </span>
                   
                </div>                                                                                              
            </div>
            <div className='search-bar'>
                <input type="text" placeholder='Find Cars, Mobile Phones, ...' />
                <div className='search'>
                    <Search fill="#ffffff" width="25px"></Search>
                </div>
            </div>
            <div className='right'>
                <p>ENGLISH</p>
                <Arrow />
                <a href='#' className='underline'>Login</a>
                <div className='sell'>
                    <SellButtonPlus />
                    <p>SELL</p>
                </div>
                <SellButton />
            </div>
        </div>
    )
}

export default Navbar