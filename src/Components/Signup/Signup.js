import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../Store/FirebaseContext'
import {useNavigate} from 'react-router-dom'
import OlxLogo from '../assets/Olx-logo'
import './Signup.css'
function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
   firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
     firebase.firestore().collection("users").add({
       id:result.user.uid,
       username:username,
       mobile:mobile
    }).then(()=>{
        navigate("/")
      })
    })
   })
  }

  return (
    <div className='sign-up'>
      <div className="container">
        <div className="box">
          <div className='top'>
            <OlxLogo width="100px" height="100px" ></OlxLogo>
            <h3>Enter your details</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="details">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="name" placeholder='Full Name' />
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email' />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Password' />
              <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} name='mobile' placeholder='Mobile' />
            </div>
            <div className="button">
              <button  >SIGN IN</button>
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