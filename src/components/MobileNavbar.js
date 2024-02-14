import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { getAdditionalUserInfo, signInWithPopup, signOut } from '@firebase/auth'
import { auth, provider } from '../config'
import Authcontext from '../context/Authcontext'

const MobileNavbar = () => {
  const {user, setuser}= useContext(Authcontext)
  const handlesignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let userprofile = getAdditionalUserInfo(result).profile
        setuser(userprofile)

      }).catch((error) => {
        console.log(error)
      });

  }
  const handlesignout = async () => {
    signOut(auth).then(() => {
      setuser(null)
    }).catch((err) => {
      console.log(err)
    })
  }
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
        <div className='pt-3 py-2  gap-2  '>

{!user &&
  <div className=' lg:flex hidden'>
    <div onClick={handlesignin}>

      <Button label="Login" bgColor="bg-transparent" border="border border-white" bgOnhover="bg-white" textOnhover="text-black" textColor="text-white" />
    </div>
    <Button label="Register" bgColor="bg-[#415ED0]" bgOnhover="bg-blue-700" />
  </div>
}
{user && <div onClick={() => handlesignout()}><Button bgColor="bg-[#415ED0]" bgOnhover="bg-blue-700" label="Signout" /></div>}

</div>
            </ul>

        </nav>
    </div>
  )
}

export default MobileNavbar