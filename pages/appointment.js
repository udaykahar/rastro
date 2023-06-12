import React from 'react'
import BookAppointment from '../components/BookAppointment'
import WhyUs from '../components/WhyUs'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'

const Appointment = () => {
  return (
    <div>
      <BookAppointment/>
      <WhyUs/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default Appointment