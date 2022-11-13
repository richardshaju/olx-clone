import React, { useContext, useState, useEffect } from 'react'
import { FirebaseContext } from '../../Store/FirebaseContext'
import { PostContext } from '../../Store/PostContext'
import './PostView.css'
function PostView() {
  const [userDetails, setuserDetails] = useState()
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    const { userId } = postDetails
    firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {
      res.forEach(doc => {
        setuserDetails(doc.data())
      })
    })
  }, [])
  return (
    <div className='post-view'>
      <div className="column-1">
        <div class="images">
          <img src={postDetails.url} />
        </div>
        <div className="content">
          <h4>Description</h4>
          <p>
            Most demanded item <br />
            Top quality 7A <br />
            No any complaints <br />
            Size UK 8.5 <br />
          </p>
        </div>
      </div>
      <div className='column-2'>
        <div className="box-1">
          <div class="top">
            <h2>₹ {postDetails.price}</h2>
            <div class="icon">
              <i class="fa-solid fa-share-nodes"></i>
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
          <p>{postDetails.proName}</p>
          <div className="bottom">
            <p>Kundoor mala</p>
            <p>Today</p>
          </div>
        </div>
        <div className="box-2">
          <div className="top">
            <h4>Seller description</h4>
          </div>
          {userDetails && <div className="profile">
            <img src={require('./avatar.png')} alt="" />
            <h3>{userDetails.username}</h3> <br />
            <p>{userDetails.mobile}</p>
          </div>}
          <div className="chat">
            <button>Chat with seller</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostView