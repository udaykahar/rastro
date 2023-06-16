import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import {serviesArray} from '../constant/index'

const OurServices = () => {
  
  return (
    <>
        <div className="bg-[#031d2e] text-white w-full py-12 md:py-16 flex flex-col text-center flex-wrap mx-auto px-2 md:px-10 xl:px-0">
          <div>
            <h1 className="md:text-4xl sm:text-4xl text-4xl font-bold md:pb-2 font-thin font-normal serif">
              Our Services
            </h1>
            <hr className="w-24 text-center my-6 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
            <p className="font-bold text-gray-400">
              We offer a range of OurServices, from personalised readings to
              remedies, <br />
              to help people connect with their true purpose in life.
            </p>
          </div>

          <div className="grid grid-cols-1  mx-auto grid-flow-row pt-6 md:pt-12 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            {serviesArray.map(({img, title, desc}) => (
            <div className="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span className="as_icon flex-shrink-0">
                <Image src={img} alt="Property icon" />
              </span>
              <h4 className="as_subheading serif text-2xl pt-6">
                {title}
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
                {desc}
              </p>
            </div>
            ))}
          </div> 
        </div>
    </>
  );
};

export default OurServices;
