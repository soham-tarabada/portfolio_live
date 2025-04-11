import React, { useState } from 'react'
import {Menu,X} from 'lucide-react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    const [click , setClick] = useState()
    const handleClick = (id) => {
        setClick(id)
    }

    const [isOpen , setisOpen] = useState(false)

  return (
    <nav className='bg-transparent mt-3 text-[18px] py-4 px-6 font-medium'>
        <div className='flex items-center justify-between'>
            <div className='px-2 py-1 text-[25px] bg-[#FFEB00] text-[#1c1b21] font-bold rounded-sm'>
                soham_9898
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
                <button onClick={()=> setisOpen(!isOpen)}>
                    {isOpen ? <X size={28} className='text-[#FFEB00]'/> : <Menu size={28} className=' text-[#FFEB00]'/>}
                </button>
            </div>

            {/* Navbar Links */}    
            <ul className='hidden md:flex space-x-6 text-[#FFEB00]'>
                <NavLink to='/portfolio_live' className='scale-90 hover:bg-[#FFEB00] hover:scale-125 transition-all duration-300 hover:text-[#1c1b21] px-2 py-1 rounded-sm' >Home</NavLink>
                <NavLink to='/portfolio_live/about' className='scale-90 hover:bg-[#FFEB00] hover:text-[#1c1b21] hover:scale-125 transition-all duration-300 px-2 py-1 rounded-sm'>About Me</NavLink>
                <NavLink to='/portfolio_live/projects' className='scale-90 hover:bg-[#FFEB00] hover:text-[#1c1b21] hover:scale-125 transition-all duration-300 px-2 py-1 rounded-sm'>Projects</NavLink>
                <NavLink to='https://drive.google.com/uc?export=download&id=1QKEPq1gbyAIpxLRpMtIfAXr-2Fau3jdI' className='scale-90 hover:bg-[#FFEB00] hover:text-[#1c1b21] hover:scale-125 transition-all duration-300 px-2 py-1 rounded-sm'>Resume</NavLink>
                <NavLink to='/portfolio_live/contact' className='scale-90 hover:bg-[#FFEB00] hover:text-[#1c1b21] hover:scale-125 transition-all duration-300 px-2 py-1 rounded-sm'>Contact Me</NavLink>
            </ul>
        </div>

        {/* Mobile Menu */}
        {
            isOpen && (
                <ul className='flex flex-col mt-3 items-start space-y-2 text-[#FFEB00]'>
                    <NavLink to='/portfolio_live' className='hover:bg-[#FFEB00] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Home</NavLink>
                    <NavLink to='/portfolio_live/about' className='hover:bg-[#FFEB00] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>About Me</NavLink>
                    <NavLink to='/portfolio_live/projects' className='hover:bg-[#FFEB00] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Projects</NavLink>
                    <NavLink to='https://drive.google.com/uc?export=download&id=1QKEPq1gbyAIpxLRpMtIfAXr-2Fau3jdI' className='hover:bg-[#FFEB00] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Resume</NavLink>
                    <NavLink to='/portfolio_live/contact' className='hover:bg-[#FFEB00] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Contact Me</NavLink>
                </ul>
            )
        }
    </nav>
  )
}

export default Navbar