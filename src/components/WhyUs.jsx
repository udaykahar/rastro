import React from 'react'
import shape from '../assets/images/svg/shape.svg'
import '../assets/css/style.css';


const WhyUs = () => {
  return (
    <>
        <div className="bg-[#031d2e] text-white w-full">
            <div className="max-w-[800px] w-full h-screen text-center flex flex-col justify-center pt-20 mx-auto px-2 md:px-0">
                <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-2 font-thin font-normal">Why Choose Us?</h1>
                <hr className='w-16 text-center my-6 mx-auto border-[#ff7010] border-t-4 rounded-r-full'/>
                <p className="font-bold text-gray-400">Our astrological advice are based on the ancient system of Vedic astrology, which is the most authentic, time-tested, and trustworthy astrological system in the world.</p>
                <div className="flex justify-evenly items-center mt-8">
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">1500+</span>+</span><img src={shape} alt=""/></span>
                        <h4>Trusted by thousand clients</h4>
                    </div> 
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">1500+</span>+</span><img src={shape} alt=""/></span>
                        <h4>Trusted by thousand clients</h4>
                    </div> 
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">1500+</span>+</span><img src={shape} alt=""/></span>
                        <h4>Trusted by thousand clients</h4>
                    </div> 
                    <div class="as_whychoose_box text-center">
                        <span class="as_number"><span><span data-from="300" data-to="1500"
                            data-speed="2000">1500+</span>+</span><img src={shape} alt=""/></span>
                        <h4>Trusted by thousand clients</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyUs