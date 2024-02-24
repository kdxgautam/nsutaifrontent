import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <div></div>
  )
}

export default Admin