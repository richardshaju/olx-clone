import React, { useState, useContext } from 'react'
import Arrow from '../assets/Arrow'
import OlxLogo from '../assets/Olx-logo'
import Search from '../assets/Search'
import { useNavigate } from 'react-router-dom'
import SellButton from '../assets/sellButton'
import SellButtonPlus from '../assets/sellPlus'
import { AuthContext, FirebaseContext } from '../../Store/FirebaseContext'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)
    const [condition, setcondition] = useState(false)
    const [location, setLocation] = useState("")
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
                <div className="options" style={{ display: condition ? "flex" : 'none' }}>
                    <div className='locations'>
                        <div class="title">
                            <span>POPULAR LOCATIONS</span>
                        </div>
                        <div className='list'>
                            <p onClick={() => { setLocation("Kerela"); setcondition(false) }} ><span class="material-symbols-outlined">
                                location_on
                            </span>Kerela</p>
                            <p onClick={() => { setLocation("Chennai"); setcondition(false) }}> <span class="material-symbols-outlined">
                                location_on
                            </span>Chennai</p>
                            <p onClick={() => { setLocation("Punjab"); setcondition(false) }}><span class="material-symbols-outlined">
                                location_on
                            </span>Punjab</p>
                            <p onClick={() => { setLocation("Mumbai"); setcondition(false) }}><span class="material-symbols-outlined">
                                location_on
                            </span>Mumbai</p>
                        </div>
                    </div>
                </div>
                <div className='country-search' >
                    <Search fill="#00000" width="18px"></Search>
                    <input type="text" onClick={show} placeholder="Search city, area or locality" value={location} />
                    <span onClick={show} className={condition ? "arrow" : 'default'}>
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
            {user && <span onClick={() => {
                    firebase.auth().signOut();
                    navigate('/login')
                }}>LOGOUT</span>}
                <p>ENGLISH</p>
                <Arrow />
                <a href={user ? '#' : '/login'} className='underline'>{user ? user.displayName : 'Login'}</a>
            
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