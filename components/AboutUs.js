import React from "react";
import richagour from "../public/images/richagour.jpg";
import call1 from "../public/images/svg/call1.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
    <motion.div
             initial={{ opacity:0}}
             animate={{ opacity:1}}
           transition={{ duration: 0.5, type: 'tween' }} 
    className="max-w-[1240px] mx-auto py-12 md:py-16 grid grid-cols-12 gap-8 px-4">
      <div className="col-span-full md:col-span-6">
        <Image src={richagour} alt="Richa Gour Image" className="rounded-3xl mx-auto md:mx-0 w-[90%] h-auto"/>
      </div>
      <div className="col-span-full md:col-span-6">
        <h1 className="text-4xl lg:text-5xl serif">About Acharaya Richa Gour</h1>
        <hr className='w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full'/>

        <p>
          Acharya Richa has been recognised as a "expert in Vedic astrology and
          geminology" by Hindustan Times, and she has also written numerous
          articles for Policewala(A national Magazine).
        </p>
        <p className="py-6">
          Acharaya Richa is practising astrology for over 15 years and has a
          wealth of experience to share. she is passionate about astrology and
          believe that it has the potential to change lives for the better. If
          you're looking for guidance and insights that can help you make
          positive changes in your life, then we'd love to hear from you.
        </p>

        <div className="as_contact_expert">
          <span className="as_icon">
            <Image src={call1} alt="call-icon" />
          </span>
          <a href="tel:+918839274398">
            <div>
              <h5 className="as_white">Contact Us for Astrology</h5>
              <h1 className="as_orange">+ (91) 8839274398</h1>
            </div>
          </a>
        </div>

      </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
