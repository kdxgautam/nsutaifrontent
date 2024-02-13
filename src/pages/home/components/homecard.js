import React from 'react'

const HomeCard = (props) => {
  const {heading, image} = props
  return (
    <div className='w-3/4 m-auto hover:shadow-emerald-500 md:h-[27rem] sm:h-[22rem] relative rounded-2xl border-solid  my-4 shadow-2xl shadow-[#415ED0]'>
        <img src={image} alt="card" className='flex h-full m-auto w-full' />
        <h5 className='absolute top-4 left-5 font-extrabold text-xl'>{heading}</h5>
    </div>
  )
}

export default HomeCard