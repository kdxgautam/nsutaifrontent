import React, { useState } from 'react'
import Button from '../../components/Button'

const AdminAuth = () => {
    const [variant, setvariant]= useState("LOGIN")
  return (
    <div>
        <form >
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email'/>
            <label htmlFor="password">Email</label>
            <input type="password" name="password" id='password'/>

            <Button>
                {variant=="LOGIN"?"Login" :"Register"}
            </Button>            

        </form>
    </div>
  )
}

export default AdminAuth