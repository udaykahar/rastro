import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
    return (
        // font family: 'Poppins', sans-serif;
        <div className='text-white hero '>
            <div className='max-w-[800px] w-full h-screen text-center flex flex-col justify-center mt-[-96px] mx-auto px-2 md:px-0'>
                <p className='uppercase text-[#ff7010] font-bold text-xl '>Outstanding Guidance Better Future</p>
                <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-2 serif'>Wondering what future holds?</h1>
                <div className='flex  justify-center items-center'>
                    <p className='sm:text-4xl text-xl font-bold py-2'>Fast, flexible financing for </p>
                    
                    <Typed className='sm:text-4xl text-xl font-bold pl-2 text-[#ff7010]' strings={['businesses', 'investors', 'developers']} typeSpeed={40} backSpeed={50} loop />
    
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-400'>Get in touch with central india's most eminent vedic astrologer.</p>
                <button className='bg-[#ff7010] text-white font-bold py-4 px-8 rounded-md mt-8 w-[220px] mx-auto'>Book Appointment</button>
            </div>
        </div>
    )
}

export default Hero