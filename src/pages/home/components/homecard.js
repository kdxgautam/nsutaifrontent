import React from 'react'

const HomeCard = (props) => {
  const {heading, image} = props
  return (
    <div className='w-3/4 m-auto h-[27rem] relative rounded-2xl border-solid  my-4 shadow-2xl shadow-[#415ED0]'>
        <img src={image} alt="image of card" className='flex h-full m-auto w-full' />
        <h5 className='absolute top-4 left-5 font-extrabold text-xl'>{heading}</h5>
    </div>
  )
}

export default HomeCard