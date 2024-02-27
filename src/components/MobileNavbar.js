import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { signOut } from '@firebase/auth'
import { auth } from '../config'
import Authcontext from '../context/Authcontext'

const MobileNavbar = () => {
  const {user, setuser, admin, setadmin}= useContext(Authcontext)

  const navigation= useNavigate()
  const handleAdminSignout=async()=>{
    localStorage.removeItem("AdminToken")
    setadmin(null)
    navigation("/admin/auth")
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
        <Link to="/achievements">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Achievments</li>
        </Link>
        <Link to="/projects">
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Projects</li>    
        </Link>
        <div className='pt-3 py-2  gap-2  '>

{!(admin || user) &&
  <div className='flex justify-center w-auto '>
    <div  className='px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light'>

        <Link to="/login">
      <Button label="Login" bgColor="bg-transparent" border="border border-white" bgOnhover="bg-white" textOnhover="text-black" textColor="text-white" >
        Login
        </Button>
        </Link>
    </div>
    <div className='mx-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light'>

    <Button label="Register" bgColor="bg-[#415ED0]" bgOnhover="bg-blue-700" >
      <Link to="/signup">
      Register
      </Link>
    </Button>
    </div>
  </div>
}
{user && <div onClick={() => handlesignout()}><Button bgColor="bg-[#415ED0] mx-7" bgOnhover="bg-blue-700" onClick={handlesignout}>SignOut</Button></div>}
{!user && admin && <div onClick={() => handlesignout()}><Button bgColor="bg-[#415ED0] mx-7" bgOnhover="bg-blue-700" onClick={handleAdminSignout}>SignOut</Button></div>}
</div>
            </ul>

        </nav>
    </div>
  )
}

export default MobileNavbar