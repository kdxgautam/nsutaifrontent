import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";
import Authcontext from "./Authcontext";
import { auth, provider } from "../config";
const host = process.env.REACT_APP_BACKEND;
const AuthState = (props) => {
  const [user, setuser] = useState(null);
  const [admin, setadmin] = useState(null);
  

  const handlesignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let userprofile = getAdditionalUserInfo(result).profile;
        setuser(userprofile);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlesignout = async () => {
    signOut(auth)
      .then(() => {
        setuser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdminLogin = async (data) => {
    const res = await fetch(host+"/" + "admin/login", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });
    const responsedata = await res.json();
    if (responsedata.admin) {
      console.log("hello");
      setadmin(responsedata.admin);
      localStorage.setItem("AdminToken", responsedata.token);
    }
    if (responsedata.error) {
      console.log(responsedata.error);
      alert(`error: ${responsedata.error}`);
    }
  };

  
  return (
    <Authcontext.Provider
      value={{
        user,
        handleAdminLogin,
        setuser,
        admin,
        setadmin,
        handlesignin,
        handlesignout,
      }}
    >
      {props.children}
    </Authcontext.Provider>
  );
};
export default AuthState;
