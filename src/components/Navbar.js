import React from 'react'

const Navbar = () => {
  return (
    
      <nav className='border border-white   px-2 w-[98%] items-end shadow-xl text-white flex justify-between no-underline '>
        <div className='flex'>
          <img src="/images/nsutailogo.png" alt="logo" className='w-[5rem] ' />
        </div>
        <ul className='flex gap-3 list-none w-1/2 justify-between'>
          <li className='mx-5 cursor-pointer w-1/5  text-[1.1rem] font-light '>Home</li>
          <li className='mx-5 cursor-pointer w-1/5  text-[1.1rem] font-light '>About</li>
          <li className='mx-5 cursor-pointer w-1/5  text-[1.1rem] font-light '>Contact</li>
          <li className='mx-5 cursor-pointer w-1/5  text-[1.1rem] font-light '>Achievments</li>
          <li className='mx-5 cursor-pointer w-1/5  text-[1.1rem] font-light '>Projects</li>
        </ul>
        <div className='pt-3 gap-2'>
<button
  class=" bg-transparent mx-1 border border-white text-white px-4 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition duration-200 ease-in-out focus:outline-none"
>
  Login
</button>
        <button
  class="bg-[#415ED0] mx-1 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-700  focus:outline-none"
>
Register
</button>
         </div>
      </nav>

  )
}

export default Navbar