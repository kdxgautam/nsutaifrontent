import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authcontext from '../../context/Authcontext'

const Admin = () => {
    const navigation = useNavigate()
    const {admin}= useContext(Authcontext)
    useEffect(()=>{
        if(!admin){
            navigation("/admin/auth")
        }
    })
  return (
    <div className='h-[80vh] p-10'>
      <h1 className='text-[3rem] flex w-full justify-center'>Admin Options</h1>
      <div className='my-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap gap-5 justify-items-center'>
        
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
          <Link to="/admin/blogs">
            Blogs
          </Link>
        </div>
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
          <Link to="/admin/blogs">
            Events
          </Link>
        </div>
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
          <Link to="/admin/achievements">
            Achievements
          </Link>
        </div>
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
          <Link to="/admin/projects">
            Projects
          </Link>
        </div>
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
          <Link to="/admin/news">
            News
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Admin