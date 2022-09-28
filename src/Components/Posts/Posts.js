import React from 'react'
import './Posts.css'
function Posts() {
    return (
        <div className='posts'>
                <div className="post-header">
                    <h3>Recommened for you</h3>
                    <a href="#">View More</a>
                </div>
                <div className="products">
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