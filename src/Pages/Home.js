import React from 'react'
import Banner from '../Components/Banner/Banner'

import Navbar from '../Components/Navbar/Navbar'
import Posts from '../Components/Posts/Posts'
import Footer from '../Components/Footer/Footer'
import Fresh from '../Components/Posts/Fresh'


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Posts />
      <Fresh/>
<Footer/>
      
    </div>
  )
}

export default Home