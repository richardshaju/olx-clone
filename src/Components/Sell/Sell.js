import React, { useState, useContext } from 'react'
import './Sell.css'

import { FirebaseContext, AuthContext } from '../../Store/FirebaseContext'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import OlxLogo from '../assets/Olx-logo'



function Sell() {
      const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(AuthContext)
    const [proName, setproName] = useState('')
    const [category, setcategory] = useState('')
    const [price, setprice] = useState('')
    const [image, setimage] = useState(null)
    const date = new Date()
    const handleSubmit = () => {
        firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
            ref.getDownloadURL().then((url) => {
                console.log(user);
                firebase.firestore().collection('products').add({
                    proName,
                    category,
                    price,
                    url,
                    userId : user.uid,
                    createdOn : date.toDateString()
                })
                navigate('/olx-clone')
            })
        })
    }
    return (
        <div className='sell-page'>
            <div className="container">
                <div className="box">
                    <div className='top'>
                        <OlxLogo width="100px" height="100px" ></OlxLogo>
                        <h3>Enter your details</h3>
                    </div>
                   
                        <div className="details">

                            <input type="text" name="name" value={proName} onChange={(e) => setproName(e.target.value)} placeholder='Product Name' />
                            <input type="text" name='category' value={category} onChange={(e) => setcategory(e.target.value)} placeholder='Category' />
                            <input type="tex" name='price' value={price} onChange={(e) => setprice(e.target.value)} placeholder='Price' />

                            <img width="5rem" src={image ? URL.createObjectURL(image) : ''} />

                            <input type="file" name='mobile'

                                onChange={(e) => { setimage(e.target.files[0]) }} placeholder='Choose A file' />
                        </div>
                        <div className="button">
                            <button onClick={handleSubmit} >Upload</button>
                            {/* <Link to="/login">  <button style={{ background: "white", color: 'black' }}>Already have an Account?</button></Link> */}
                        </div>
               
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