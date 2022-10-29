 import React from 'react'
import './Sell.css'
function Sell() {
    return (
        <div className='sell-page'>
            <div className="container">
                <div className="box">
                    <div className='top'>
                        {/* <OlxLogo width="100px" height="100px" ></OlxLogo> */}
                        <h3>Enter your details</h3>
                    </div>
                    <form >
                        <div className="details">
                            <input type="text"  name="name" placeholder='Product Name' />
                            <input type="text" name='email' placeholder='Category' />
                            <input type="password"  name='password' placeholder='Price' />
                            <input type="file"  name='mobile' placeholder='Choose A file' />
                        </div>
                        <div className="button">
                            <button  >SIGN IN</button>
                            {/* <Link to="/login">  <button style={{ background: "white", color: 'black' }}>Already have an Account?</button></Link> */}
                        </div>
                    </form>
                    <div className="footer">
                        <p>All your personal details are safe with us.</p>

                        <p>If you continue, you are accepting <br /> OLX Terms and Conditions and Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell  