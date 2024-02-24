import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { signOut } from 'firebase/auth';
import { useState } from "react"
import  Authcontext  from "./Authcontext"
import { auth, provider } from "../config";

const AuthState= (props)=>{
    const [user, setuser]= useState(null)
    const [admin, setadmin]= useState(null)

    const handlesignin = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            let userprofile = getAdditionalUserInfo(result).profile
            setuser(userprofile)
    
          }).catch((error) => {
            console.log(error)
          });
    
      }
      const handlesignout = async () => {
        signOut(auth).then(() => {
          setuser(null)
        }).catch((err) => {
          console.log(err)
        })
      }
    return(
        <Authcontext.Provider value={{user, setuser, admin, setadmin, handlesignin, handlesignout}}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default AuthState