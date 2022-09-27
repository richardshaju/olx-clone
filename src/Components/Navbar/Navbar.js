import React from 'react'
import Arrow from './assets/Arrow'
import OlxLogo from './assets/Olx-logo'
import Search from './assets/Search'
import SellButton from './assets/sell-button'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <OlxLogo />
            </div>
            <div className='dropdown'>
                <div className='country-search'>
                    <Search fill="#00000" width="18px"></Search>
                    <Arrow />
                </div>
                <select name="" id="">

                    <option value=""></option>
                    <option></option>
                </select>
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
                <p>Login</p>
                <SellButton/>
            </div>
        </div>
    )
}

export default Navbar