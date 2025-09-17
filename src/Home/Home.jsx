import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import HomeProduct from './HomeProduct'
import Banner from './Banner'
import Service from './Service'
import Sponsor from './Sponsor'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Navbar active="home"/>
      <HeroSection/>
      <Service/>
      <HomeProduct/>
      <Banner/>
      <Sponsor/>
      <Footer/>
    </div>
  )
}

export default Home