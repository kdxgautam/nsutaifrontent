import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authcontext from '../../context/Authcontext'

const Admin = () => {
    const navigation = useNavigate()
    const {admin}= useContext(Authcontext)
    useEffect(()=>{
        if(!admin){
          console.log("no admin found")
            navigation("/admin/auth")
        }
          })
  return (
    <div className='h-[80vh] p-10'>
      <h1 className='text-[3rem] flex w-full justify-center'>Admin Dashboard</h1>
      <div className='my-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:flex-wrap gap-5 justify-items-center'>
        
          <Link to="/admin/blogs">
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
            Blogs
        </div>
          </Link>
          <Link to="/admin/events">
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
            Events
        </div>
          </Link>
          <Link to="/admin/achievements">
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
            Achievements
        </div>
          </Link>
          <Link to="/admin/projects">
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
            Projects
        </div>
          </Link>
          <Link to="/admin/news">
        <div className='border cursor-pointer p-10 text-2xl h-[10rem] w-[20rem] items-center flex justify-center rounded-xl'>
            News
        </div>
          </Link>
      </div>
    </div>
  )
}

export default Admin