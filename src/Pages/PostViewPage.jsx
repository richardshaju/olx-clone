import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import PostView from '../Components/PostView/PostView'

function PostViewPage() {
    return (
        <div>
            <Navbar/>
            <PostView />
            <Footer />
        </div>
    )
}

export default PostViewPage