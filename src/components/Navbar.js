import React, { useState } from 'react'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const toggleNav=()=>{
    setshowMobileNav(!showMobileNav)
  }
  const [showMobileNav,setshowMobileNav] = useState(false)
  return (
    <>
      <nav className='relative z-10 top-0  px-2 w-[98%] items-end shadow-xl text-white flex justify-between no-underline '>
        <div className='flex'>
          <img src="/images/nsutailogo.png" alt="logo" className='w-[5rem] ' />
        </div>
        {
          !showMobileNav ?
          <ul className=' sm:hidden md:hidden lg:flex hidden py-2  gap-3 list-none w-1/2  justify-center '>
          <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>Home</li>
          <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>About</li>
          <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>Contact</li>
          <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>Achievments</li>
          <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>Projects</li>
        </ul> :
        <MobileNavbar/>
        }

        <div className='sm:flex md:flex lg:hidden ml-auto text-xl py-5 justify-end' onClick={()=>toggleNav()}>

          <GiHamburgerMenu />

        </div>
        <div className='pt-3 gap-2'>

          <div className=' lg:flex hidden'>

            <Button label="Login" bgColor="bg-transparent" border="border border-white" bgOnhover="bg-white" textOnhover="text-black" textColor="text-white" />
            <Button label="Register" bgColor="bg-[#415ED0]" bgOnhover="bg-blue-700" />
          </div>

        </div>
      </nav>

    </>
  )
}

export default Navbar
