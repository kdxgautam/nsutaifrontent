import React from 'react'

const MobileNavbar = () => {
  return (
    <div className=' fade-in  '>
        <nav>
        <ul className='gap-3 py-2 left-0 bg-[#272933] absolute list-none w-full animate-fade-in  z-11 rounded-xl justify-between '>
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Home</li>
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>About</li>
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Contact</li>
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Achievments</li>
        <li className='mx-5 px-3 cursor-pointer w-1/5 py-3 text-[1.1rem] font-light '>Projects</li>    
            </ul>
        </nav>
    </div>
  )
}

export default MobileNavbar