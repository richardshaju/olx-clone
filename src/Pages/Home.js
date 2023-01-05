import React, { useEffect, useContext } from 'react'
import Banner from '../Components/Banner/Banner'
import Loading from '../Store/LoadingContext'
import LoadingPage from '../Components/Loading/Loading'
import Navbar from '../Components/Navbar/Navbar'
import Posts from '../Components/Posts/Posts'
import Footer from '../Components/Footer/Footer'
import Fresh from '../Components/Posts/Fresh'
import { LoadingContext } from '../Store/LoadingContext'

function Home() {
  const { loading } = useContext(LoadingContext)
  return (
    <div>
      {loading ?   null :<LoadingPage/>} 
      <Navbar />
      <Banner />
      <Posts />
      <Footer />
      
    </div>
  )
}

export default Home