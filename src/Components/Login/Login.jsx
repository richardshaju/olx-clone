import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../Store/FirebaseContext'
import { useNavigate , Link} from 'react-router-dom'
import OlxLogo from '../assets/Olx-logo'
import './Login.css'
function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { firebase } = useContext(FirebaseContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigate('/olx-clone')
        }).catch((err) => {
            alert(err.message)
        })
    }

    return (
        <div className='login'>
            <div className="wrapper">
                <div className="box">
                    <div className='top'>
                        <OlxLogo width="100px" height="100px" ></OlxLogo>
                        <h3>Enter your details</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="details">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email' />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Password' />
                        </div>
                        <div className="button">
                            <button>LOGIN</button>

                          <Link to="/signup">  <button style={{background:"white" , color:'black'}}>SIGN UP</button></Link>
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