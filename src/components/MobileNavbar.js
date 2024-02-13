import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <div className=' fade-in  '>
        <nav>
        <ul className='gap-3 py-2 left-0 bg-[#272933] absolute list-none w-full animate-fade-in  z-11 rounded-xl justify-between '>
        <Link to="/">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Home</li>
        </Link>
        <Link to="/about">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>About</li>
        </Link>
        <Link to="/contact">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Contact</li>
        </Link>
        <Link to="/achievments">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Achievments</li>
        </Link>
        <Link to="/projects">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Projects</li>    
        </Link>
            </ul>
        </nav>
    </div>
  )
}

export default MobileNavbar