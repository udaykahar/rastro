import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import  logo from "../public/images/logo.svg";
import Image from 'next/image'
import Link from "next/link";
// import framer motion
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="bg-[#062538] text-white w-full sticky top-0 z-[100] ">
      <div className=" text-white flex justify-between items-center h-24 px-2 md:px-12 px-4 md:mx-auto ">
        <Link href="/">
          <div>
                 <Image
                    src={logo}
                    className="w-full"
                    alt="logo image"
                  />
          </div>
        </Link>
        <ul className="hidden md:flex transition-colors duration-500 ease-in-out cursor-pointer text-xl items-center">
          {/* <Link href="/">
            <li className="p-4 hover:text-[#ff7010] transition-colors duration-500 ease-in-out">
              Home
            </li>
          </Link> */}
          <Link href="/about">
            <li className="p-4 hover:text-[#ff7010]">About</li>
          </Link>
          <Link href="/services">
            <li className="p-4 hover:text-[#ff7010]">Services</li>
          </Link>
          <Link href="/contact">
            <li className="p-4 hover:text-[#ff7010]">Contact</li>
          </Link>

          <Link href="/appointment">
            <motion.li
              whileHover={{
                // box shadow round
                boxShadow: "0 0 8px rgb(255, 112, 16)",
                // boxShadow: "0 0 10px #ff7010",
                textShadow: "0px 0px 8px #ff7010",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-[#ff7010] border-2 border-[#ff7010] ml-4 h-12 rounded-full px-6 flex items-center  transition-colors"
            >
              Appointment
            </motion.li>
          </Link>
        </ul>

        <div className="block md:hidden">
          {nav ? (
            <AiOutlineClose
              onClick={toggleNav}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={toggleNav}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>

        <div
          className={
            nav
              ? "h-full fixed left-0 top-0 border-r border-gray-900 w-[60%] bg-[#031d2e] ease-in-out duration-500"
              : " h-full fixed left-[-100%]  top-0 ease-in-out duration-500 bg-[#031d2e] "
          }
        >
          <Link href="/" onClick={() => setNav(!nav)}>
            <img src={logo} alt="logo" className="p-4 pl-2" />
          </Link>
          <ul className="uppercase" onClick={() => setNav(!nav)}>
            <Link href="/">
              <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
                Home
              </li>
            </Link>
            <Link href="/services">
              <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
                Services
              </li>
            </Link>
            <Link href="/about">
              <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
                Contact
              </li>
            </Link>
            <Link href="/appointment">
              <li className="p-4 hover:text-[#ff7010]  border-gray-600 border-b">
                Appointment
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
