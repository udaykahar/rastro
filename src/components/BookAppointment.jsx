import React from 'react'
import {InlineWidget} from 'react-calendly'



const BookAppointment = () => {
  return (
    <div className='text-center py-8 md:py16 px-2 md:px-0'>
        <h1 className='serif text-4xl mx-auto'>Book Your Appointment To Discuss Any Problem.</h1>
        <hr className='w-24 mx-auto my-6 border-[#ff7010] border-t-4 rounded-r-full'/>
        <div>
        <InlineWidget url="https://calendly.com/richanshastrology/horoscope?hide_event_type_details=hide_gdpr_banner=1"
            styles={{
                width: '100%',
                height: '1100px',
              }}
              pageSettings={{
                backgroundColor: '062538',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'ff7010',
                textColor: 'fff'
              }}
              
        />
      </div>

    </div>
  )
}

export default BookAppointment