import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/logo.svg";
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#031d2e] text-white w-full sticky top-0 z-10">
      <div className=" text-white flex justify-between items-center h-24 px-2 md:px-12 px-4 md:mx-auto">
        <div>
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <ul className="hidden md:flex transition-colors duration-500 ease-in-out cursor-pointer text-xl">
          <li className="p-4 hover:text-[#ff7010] transition-colors duration-500 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:text-[#ff7010]">
            <Link to="/services">Services</Link>
          </li>
          <li className="p-4 hover:text-[#ff7010]">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 hover:text-[#ff7010]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 hover:text-[#ff7010]">
            <Link to="/appointment">Appointment</Link>
          </li>
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
              ? "h-full fixed left-0 top-0 border-r border-gray-900 w-[60%] bg-[#000300] ease-in-out duration-500"
              : " h-full fixed left-[-100%]  top-0 ease-in-out duration-500 bg-[#000300] "
          }
        >
          <img src={logo} alt="logo" className="p-4 pl-2" />
          <ul className="uppercase" onClick={() => setNav(!nav)}>
            <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              <Link to="/services">Services</Link>
            </li>
            <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 hover:text-[#ff7010] border-gray-600 border-b">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-4 hover:text-[#ff7010]">
              <Link to="/appointment">Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
