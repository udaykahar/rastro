import React from 'react'
import {Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/svg/arrow.svg";
import map from "../assets/images/svg/map.svg";
import address from "../assets/images/svg/address.svg";
import call from "../assets/images/svg/call.svg";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='max-w-[1240px] mx-auto py-8 px-4 flex justify-between flex-wrap gap-8 text-gray-300 transition'>
      <div>
      <img src={logo} alt="logo"  />
        <p className='py-4'>Outstanding Guidance Better Future</p>
        <div className='flex gap-4'>
          <a href="https://www.facebook.com/richagour26/" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className='text-3xl' />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className='text-3xl' />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-3xl' />
          </a> */}
          <a href="https://t.me/Richaanshastrology" target="_blank" rel="noopener noreferrer">
          <FaTelegram className='text-3xl' />
          </a>
          {/* <FaGithubSquare className='text-2xl' /> */}
        </div>
        {/* <p className='pt-6'>Copyright © 2022 Richaansh-Astrology</p> */}
      </div>

      <div>
        <h3 className='text-2xl w-full serif'>Quick Links</h3>
        <hr className='w-24 text-center my-4 border-[#ff7010] border-t-2 rounded-r-full'/>
        <div className='flex flex-row justify-between'>
        <ul className='py-4 pt-0'>
          <div className='flex gap-3'>
            <img src={arrow} alt="map-icon"  />
          <Link to="/about">
          <li className='py-2'>About</li>
          </Link>
          </div>
          <div className='flex gap-3 '>
            <img src={arrow} alt="map-icon"  />
            <Link to="/services">
          <li className='py-2'>Services</li>
          </Link>
          </div>
          <div className='flex gap-3 '>
            <img src={arrow} alt="map-icon"  />
            <Link to="/contact">
          <li className='py-2'>Contact</li>
          </Link>
          </div>
          <div className='flex gap-3 '>
            <img src={arrow} alt="map-icon"  />
            <Link to="/appointment">
          <li className='py-2'>Appointment</li>
          </Link>
          </div>
        </ul>
        </div>
      </div>

      <div>
        <span className='text-2xl w-full serif'>Contact Us</span>
        <hr className='w-24 text-center my-4 border-[#ff7010] border-t-2 rounded-r-full'/>
        <div className='flex flex-row justify-between'>
        <ul className='py-4 pt-0'>
          <div className='flex gap-2'>
            <img src={map} alt="map-icon"  />
          <li className='py-2'>Shiv Elite Township , Khapri , 441108, Nagpur, India</li>
          </div>
          <div className='flex gap-2'>
            <img src={address} alt="address-icon"  />
          <li className='py-2'>richaansh26@gmail.com</li>
          </div>
          <div className='flex gap-2'>
            <img src={call} alt="call-icon"  />
          <li className='py-2'>+(91) 8839274398</li>
          </div>
        </ul>
        </div>
      </div>
    </div>
    <div className='bg-[#07273c]' >
      <p className='text-center text-gray-300 py-4'>Copyright © 2022 Richaansh-Astrology</p>
    </div>
    </>
  )
}

export default Footer