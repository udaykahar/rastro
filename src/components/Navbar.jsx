import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/logo.svg";
import {Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#031d2e] text-white w-full sticky top-0 z-10 ">
      <div className=" text-white flex justify-between items-center h-24 px-2 md:px-12 px-4 md:mx-auto">
        <Link to="/">
        <div>
          <img src={logo} alt="logo" className="w-full" />
        </div>
        </Link>
        <ul className="hidden md:flex transition-colors duration-500 ease-in-out cursor-pointer text-xl items-center">
        <Link to="/">
          <li className="p-4 hover:text-[#ff7010] transition-colors duration-500 ease-in-out">
            Home
          </li>
            </Link>
            <Link to="/services">
          <li className="p-4 hover:text-[#ff7010]">
            Services
          </li></Link>
          <Link to="/about">
          <li className="p-4 hover:text-[#ff7010]">
            About
          </li></Link>
          <Link to="/contact">
          <li className="p-4 hover:text-[#ff7010]">
            Contact
          </li></Link>
          <Link to="/appointment">
          <li className="text-[#ff7010] hover:text-[#fff] hover:bg-[#ff7010] border border-[#ff7010] ml-4 h-12 rounded-full px-6 flex items-center  transition-colors">
            Appointment
          </li>
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
          <Link to="/" onClick={() => setNav(!nav)}>
            <img src={logo} alt="logo" className="p-4 pl-2" />
            </Link>
          <ul className="uppercase" onClick={() => setNav(!nav)}>
          <Link to="/">
            <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              Home
            </li></Link>
            <Link to="/services"><li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              Services
            </li></Link>
            <Link to="/about"><li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
                About
            </li></Link>
            <Link to="/contact">
            <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              Contact
            </li></Link>
            <Link to="/appointment">
            <li className="p-4 hover:text-[#ff7010]  border-gray-600 border-b">
             Appointment
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
