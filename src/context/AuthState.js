import { useState } from "react"
import  Authcontext  from "./Authcontext"

const AuthState= (props)=>{
    const [user, setuser]= useState(null)
    return(
        <Authcontext.Provider value={{user, setuser}}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default AuthState