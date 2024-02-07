import React from 'react'

const Card = () => {
  return (
<div class="w-[20rem] p-2 overflow-hidden shadow-lg rounded-xl bg-black opacity-[63%] h-[28rem]">
  <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div >
    <h2 className='font-semibold my-2 text-center'>Heading</h2>
    <p className='px-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis odit sunt ut! Amet saepe quia, sequi non natus nesciunt porro Lorem, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, quisquam! Laboriosam rem nemo blanditiis non repellendus nihil. Eius, temporibus doloribus..</p>
  </div>
  <button
  class="bg-[#415ED0] mx-1 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-blue-700  focus:outline-none"
>
Register
</button>
</div>
  )
}

export default Card