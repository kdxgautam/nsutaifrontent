import React, { useContext, useState } from 'react'
import Button from './Button'
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../config';
import Authcontext from '../context/Authcontext';

const Navbar = () => {
  const [showMobileNav, setshowMobileNav] = useState(false)
  const { user, setuser } = useContext(Authcontext)

  const toggleNav = () => {
    setshowMobileNav(!showMobileNav)
  }


  const handlesignout = async () => {
    signOut(auth).then(() => {
      setuser(null)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <>
      <nav className='relative z-10 top-0 px-2 w-[98%] items-end shadow-xl text-white flex justify-between no-underline '>
        <div className='flex'>
          <img src="/images/nsutailogo.png" alt="logo" className='w-[5rem] ' />
        </div>
        {
          !showMobileNav ?
            <ul className=' sm:hidden md:hidden lg:flex hidden py-2  gap-3 list-none w-[50vw]  justify-center '>
              <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>
                <Link to="/About">
                  About
                </Link>
              </li>
              <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
              <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>
                <Link to="/achievements">
                  Achievments
                </Link>
              </li>
              <li className='mx-2 cursor-pointer w-1/5  text-[1.1rem] font-light '>
                <Link to="/projects">
                  Projects
                </Link>
              </li>
            </ul> :
            <MobileNavbar />

        }

        <div className='sm:flex md:flex lg:hidden ml-auto text-xl py-5 justify-end' onClick={() => toggleNav()}>

          <GiHamburgerMenu />

        </div>
        <div className='pt-3 py-2  gap-2  '>

          {!user &&
            <div className=' lg:flex hidden'>
              <div >
                <Button label="Login" bgColor="bg-transparent" border="border border-white" bgOnhover="bg-white" textOnhover="text-black" textColor="text-white" >
                <Link to="/login">
                  Login
                </Link>
                </Button>
              </div>
              <Button  bgColor="bg-[#415ED0]" bgOnhover="bg-blue-700" >
              <Link to="/signup">
                  Register
                </Link>

              </Button>
            </div>
          }
          {user && <div className='lg:flex hidden' onClick={() => handlesignout()}><Button bgColor="bg-[#415ED0]" bgOnhover="bg-blue-700" label="Signout" >SignOut</Button></div>}

        </div>
      </nav>

    </>
  )
}

export default Navbar
