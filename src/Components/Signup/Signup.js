import React from 'react'
import OlxLogo from '../assets/Olx-logo'
import './Signup.css'
function Login() {
  return (
    <div className='sign-up'>
      <div className="container">
        <div className="box">
          <div className='top'>
            <OlxLogo width="100px" height="100px" ></OlxLogo>
            <h3>Enter your details</h3>
          </div>
          <form action="">
            <div className="details">
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Email' />
              <input type="password" placeholder='Password' />
              <input type="text" placeholder='Mobile' />
            </div>
            <div className="button">
              <button>SIGN IN</button>
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

export default Login