import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = (props) => {
  const {title, image,_id} = props.element
  const {link }= props
  return (
    <div className='w-3/4 cursor-pointer m-auto hover:shadow-emerald-500 md:h-[27rem] sm:h-[22rem] relative rounded-2xl border-solid  my-4 shadow-2xl shadow-[#415ED0]'>
      <Link to={`${link}/${_id}`}>
        <img src={image} alt="card" className='flex h-full m-auto w-full' />
        <h5 className='absolute top-4 left-5 font-extrabold text-xl'>{title}</h5>
    </Link>
    </div>
  )
}

export default HomeCard