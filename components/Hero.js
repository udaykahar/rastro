import React from "react";
import Typed from "react-typed";
import Link  from "next/link";
import { motion } from "framer-motion";
import styles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="max-w-[800px] w-full h-screen text-center flex flex-col justify-center mt-[-96px] mx-auto px-2 md:px-0 ">
        <p className="uppercase text-[#ff7010] font-bold text-xl pt-6 md:pt-0">
         this is description

        </p>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold serif py-2">
        how you can help
        </h1>
        <div className="flex justify-center items-center">
          <p className="sm:text-4xl text-xl font-bold py-2">
            Discover 🦚 about{" "}
          </p>
          <Typed
            className="sm:text-4xl text-xl font-bold pl-2 text-[#ff7010]"
            strings={[
              "Life decisions",
              "Relationships",
              "Destiny",
              "Self-Growth",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Get in touch with central india's most eminent vedic astrologer.
        </p>
        <div className="w-min mx-auto py-6">
        <Link href="/appointment" >
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} className="w-[260px] mx-auto p-3 bg-[#ff7010] text-white text-2xl font-bold rounded-md "
              >
              Book Appointment
            </motion.button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
