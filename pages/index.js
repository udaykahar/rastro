import React from 'react'
import Hero from '../components/Hero'
import OurServices from '../components/OurServices'
import WhyUs from '../components/WhyUs'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <OurServices />
      <Feedback />
    </>
  )
}

export default Home