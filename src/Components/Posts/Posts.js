import { React, useEffect, useState, useContext, useNa } from 'react'
import { FirebaseContext } from '../../Store/FirebaseContext'
import { PostContext } from '../../Store/PostContext'
import { useNavigate } from 'react-router-dom'
import './Posts.css'
function Posts() {
    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    const { setpostDetails } = useContext(PostContext)
    useEffect(() => {
        firebase.firestore().collection('products').get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })

            setProducts(allPost)
        })

    }, [])


    return (
        <div className='posts'>
            <div className="post-header">
                <h3>Recommened for you</h3>
                <a href="#">View More</a>
            </div>
            <div className="products">
                {products.map(product => {
                    return <div className="product" 
                    onClick={() => {
                        setpostDetails(product)
                        navigate('./post')
                    }} >
                        <div className="top">
                            <img src={product.url} alt="" />

                        </div>
                        <div className="bottom">
                            <h4>{product.price}</h4>
                            <p>2018 - 50,000 km</p>
                            <p style={{ color: '#999999' }}>{product.proName}</p>
                        </div>
                    </div>
                })
                }
                <div className="product">
                    <div className="top">
                        <img src={require('../assets/image.png')} alt="" />

                    </div>
                    <div className="bottom">
                        <h4>₹10,00,000</h4>
                        <p>2018 - 50,000 km</p>
                        <p style={{ color: '#999999' }}> Audi 2018 ...</p>
                    </div>
                </div>
                <div className="product">
                    <div className="top">
                        <img src={require('../assets/image.png')} alt="" />

                    </div>
                    <div className="bottom">
                        <h4>₹10,00,000</h4>
                        <p>2018 - 50,000 km</p>
                        <p style={{ color: '#999999' }}> Audi 2018 ...</p>
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Posts