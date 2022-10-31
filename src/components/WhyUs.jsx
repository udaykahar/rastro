import React from 'react'
import shape from '../assets/images/svg/shape.svg'
// import motion framer
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };



const WhyUs = () => {
  return (
    <>
            <div className="max-w-[1240px] bg-[#031d2e] text-white grid grid-cols-12 justify-self-end py-12 md:py-16 mx-auto px-2 md:px-10 xl:px-0 ">
                <div className='pr-0 lg:pr-[46px] col-span-full md:col-span-4'>
                <h1 className="text-center xl:text-justify md:text-4xl sm:text-4xl text-4xl font-bold md:py-2 font-thin font-normal serif">Why Choose Us?</h1>
                <hr className=' mx-auto xl:mx-0 w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full'/>
                <p className="font-bold text-gray-400 text-center md:text-justify">Our astrological advice are based on the ancient system of Vedic astrology, which is the most authentic, time-tested, and trustworthy astrological system in the world.</p>
                </div>
                <motion.div 
                
                className="container inline-grid grid-cols-12 col-span-full md:col-span-8 gap-2 pt-8 md:pt-0"
                variants={container}
                initial="hidden"
                animate="visible"
                >
                    <motion.div  key={0} variants={item} className="item as_whychoose_box text-center col-span-6 md:col-span-3">
                        <span className="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">1500</span>+</span><img src={shape} alt=""/></span>
                        <h4>Trusted by <br /> thousand clients</h4>
                    </motion.div>
                    <motion.div key={1} variants={item} className="item as_whychoose_box text-center col-span-6 md:col-span-3">
                        <span className="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">800</span>+</span><img src={shape} alt=""/></span>
                        <h4>Types of horoscopes</h4>
                    </motion.div>
                    <motion.div key={2} variants={item} className="item as_whychoose_box text-center col-span-6 md:col-span-3">
                        <span className="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">80</span>%</span><img src={shape} alt=""/></span>
                        <h4>Success rate</h4>
                            </motion.div>
                    
                            <motion.div key={3} variants={item} className="item as_whychoose_box text-center col-span-6 md:col-span-3">
                        <span className="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">15</span>+</span><img src={shape} alt=""/></span>
                        <h4>Year experience</h4>
                            </motion.div>
                    
                
                </motion.div>
            </div>
    </>
  )
}

export default WhyUs