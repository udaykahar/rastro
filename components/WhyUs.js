import { useRef,useEffect, React } from "react";
import shape from "../public/images/svg/shape.svg";
import { animate, motion } from "framer-motion";
import styles from '../styles/whyus.module.css';
import Image from 'next/image'
import { whyUs } from "../constant";
import MotionSpan from "./MotionSpan"


const WhyUs = () => {
  return (
    <>  
      <div className="max-w-[1240px] bg-[#031d2e] text-white grid grid-cols-12 justify-self-end py-12 md:py-16 mx-auto px-2 md:px-10 xl:px-0 ">
        <div className="pr-0 lg:pr-[46px] col-span-full md:col-span-4">
          <h1 className="text-center xl:text-justify md:text-4xl sm:text-4xl text-4xl font-bold md:py-2 font-thin font-normal serif">
            Why Choose Us?
          </h1>
          <hr className=" mx-auto xl:mx-0 w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full" />
          <p className="font-bold text-gray-400 text-center md:text-justify">
            Our astrological advice are based on the ancient system of Vedic
            astrology, which is the most authentic, time-tested, and trustworthy
            astrological system in the world.
          </p>
        </div>
        
        <div className="inline-grid grid-cols-12 col-span-full md:col-span-8 gap-2 pt-8 md:pt-0">

        {whyUs.map((client) => (
            <div className="text-center col-span-6 md:col-span-3">
              <span className={styles.as_number}>
                <MotionSpan val={client.value}/>
                <Image src={shape} alt="astrological logo" />
              </span>

              <h4 className={styles.as_whychoose_box_h4}>
                {client.text}
              </h4>
            </div>
          ))}
        
        </div> 
      </div>
    </>
  );
};

export default WhyUs;
