import React from 'react'
import shape from '../assets/images/svg/shape.svg'
import '../assets/css/style.css';


const WhyUs = () => {
  return (
    <>
        <div className="bg-[#031d2e] text-white w-full  ">
            <div className="max-w-[1240px] w-full flex justify-between flex-wrap py-40 mx-auto px-2 md:px-10 xl:px-0 ">
                <div className='max-w-[400px]'>
                <h1 className="md:text-4xl sm:text-4xl text-4xl font-bold md:py-2 font-thin font-normal serif">Why Choose Us?</h1>
                <hr className='w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full'/>
                <p className="font-bold text-gray-400">Our astrological advice are based on the ancient system of Vedic astrology,<br /> which is the most authentic, time-tested, and trustworthy astrological system in the world.</p>
                </div>
                <div className="flex justify-evenly gap-2 pt-6 md:pt-0 md:gap-6 flex-wrap">
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">1500</span>+</span><img src={shape} alt=""/></span>
                        <h4>Trusted by thousand  <br /> clients</h4>
                    </div> 
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">80</span>%</span><img src={shape} alt=""/></span>
                        <h4>Success rate</h4>
                    </div> 
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">15</span>+</span><img src={shape} alt=""/></span>
                        <h4>Year's experience</h4>
                    </div> 
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">800</span>+</span><img src={shape} alt=""/></span>
                        <h4>Type of horoscopes</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyUs