import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Feedback />
      <Footer />
    </>
  )
}

export default Home