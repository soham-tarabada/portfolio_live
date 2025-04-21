import React, { useState } from 'react'
import {Menu,X} from 'lucide-react'
import {NavLink, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

const Navbar = () => {

    const [click , setClick] = useState()
    const handleClick = (id) => {
        setClick(id)
    }

    const [isOpen , setIsOpen] = useState(false)    
    const navigate = useNavigate()

  return (
    <nav className='bg-transparent mt-3 text-[18px] py-4 px-6 font-medium'>
        <div className='flex items-center justify-between'>
            <div className='px-2 py-1 text-[25px] text-[#7aa9a9] font-bold rounded-sm'>
                soham_9898
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
                <button onClick={()=> setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} className='text-[#7aa9a9]'/> : <Menu size={28} className=' text-[#7aa9a9]'/>}
                </button>
            </div>

            {/* Navbar Links */}
            <ul className='hidden md:flex space-x-6 text-[#7aa9a9]'>
                <motion.button
                whileTap={{scale:0.1}}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={()=>navigate('/portfolio_live')} className=' hover:bg-[#7aa9a9] transition-all duration-300 hover:text-[#1c1b21] px-2 py-1 rounded-sm' >Home</motion.button>

                <motion.button 
                whileTap={{scale:0.1}}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={()=>navigate('/portfolio_live/about')} className=' hover:bg-[#7aa9a9] hover:text-[#1c1b21] transition-all duration-300 px-2 py-1 rounded-sm'>About Me</motion.button>

                <motion.button
                onClick={()=>navigate('/portfolio_live/projects')} 
                whileTap={{scale:0.1}}
                transition={{ type: "spring", stiffness: 300 }}
                className=' hover:bg-[#7aa9a9] hover:text-[#1c1b21] transition-all duration-300 px-2 py-1 rounded-sm'>Projects</motion.button>

                <motion.button
                whileTap={{scale:0.1}}
                transition={{ type: "spring", stiffness: 300 }} 
                onClick={()=>navigate('/portfolio_live/resume')} className=' hover:bg-[#7aa9a9] hover:text-[#1c1b21] transition-all duration-300 px-2 py-1 rounded-sm'>Resume</motion.button>

                <motion.button
                whileTap={{scale:0.1}}
                transition={{ type: "spring", stiffness: 300 }} 
                onClick={()=>navigate('/portfolio_live/contact')} className=' hover:bg-[#7aa9a9] hover:text-[#1c1b21] transition-all duration-300 px-2 py-1 rounded-sm'>Contact Me</motion.button>
            </ul>
        </div>

        {/* Mobile Menu */}
        {
            isOpen && (
                <ul className='flex flex-col mt-3 items-start space-y-2 text-[#7aa9a9]'>
                    <NavLink onClick={()=>{setIsOpen(false)}} to='/portfolio_live' className='hover:bg-[#7aa9a9] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Home</NavLink>
                    <NavLink onClick={()=>{setIsOpen(false)}} to='/portfolio_live/about' className='hover:bg-[#7aa9a9] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>About Me</NavLink>
                    <NavLink onClick={()=>{setIsOpen(false)}} to='/portfolio_live/projects' className='hover:bg-[#7aa9a9] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Projects</NavLink>
                    <NavLink onClick={()=>{setIsOpen(false)}} to='/portfolio_live/resume' className='hover:bg-[#7aa9a9] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Resume</NavLink>
                    <NavLink onClick={()=>{setIsOpen(false)}} to='/portfolio_live/contact' className='hover:bg-[#7aa9a9] hover:text-[#1c1b21] px-2 py-1 rounded-sm'>Contact Me</NavLink>
                </ul>
            )
        }
    </nav>
  )
}

export default Navbar