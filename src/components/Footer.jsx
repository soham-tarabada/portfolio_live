import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className="bg-transparent p-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
        
        {/* Socials Section */}
        <div className="text-center md:text-left">
          {/* Social Icons (Linear Layout) */}
          <div className="flex space-x-4 mt-3">

            <NavLink to="https://www.instagram.com/_soham9898?igsh=MTE2YzFwaXR4Z3Jjcw==" className="text-3xl hover:text-yellow-400">
              <img className='w-10' src={assets.Instagram} alt="" />
            </NavLink>

            <NavLink to="http://t.me/soham9898" className="text-3xl hover:text-yellow-400">
            <img className='w-10' src={assets.Telegram} alt="" />
            </NavLink>

            <NavLink to="https://github.com/210130107079" className="text-3xl hover:text-yellow-400">
            <img className='w-10' src={assets.Github} alt="" />
            </NavLink>

            <NavLink to="https://www.linkedin.com/in/soham-tarabada-51a50020b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-3xl hover:text-yellow-400">
            <img className='w-10' src={assets.Linkedin} alt="" />
            </NavLink>

            <NavLink to="https://wa.me/918799535382" className="text-3xl hover:text-yellow-400">
              <img className='w-10' src={assets.Whatsapp} alt="" />
            </NavLink>

          </div>
        </div>

        {/* Get in Touch Section */}
        <div className="mt-4 md:mt-0 md:text-right">
          <div className="text-[#1c1b21 text-[20px] space-y-1 text-sm text-whi leading-6">
            <a href='mailto:sohamtarabada2003@gmail.com' className='bg-[#FFEB00] px-3 py-2 rounded-sm sm:text-xs md:text-xs'>sohamtarabada2003@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-white text-[12px] mt-4">
        © Copyright 2025 @soham_9898.com - All Rights Reserved
      </div>
    </div>
  )
}

export default Footer