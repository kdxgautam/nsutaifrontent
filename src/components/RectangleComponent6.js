import {  signInWithPopup } from "firebase/auth";
import {auth,provider} from "../config";
import { useState } from "react";


import "firebase/auth";

const RectangleComponent6 = () => {
  const [user, setuser]=useState()
  const [image, setimage]=useState("https://th.bing.com/th/id/OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj?rs=1&pid=ImgDetMain")


  const handleClick=async()=>{

    //firebase login
    signInWithPopup(auth,provider).then(async(data)=>{

      //set user as the logged in user
      setuser(data)
      //for backend schema
      let user= {email:data.user.email, uid:data.user.uid}
      
      //create user in backend
      const res= await fetch("http://127.0.0.1:4000/users/create",{
        method:"POST",
        mode:"cors",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(user)
      })
      let responseData= await res.json()

      
      // set the user in localstorage
      localStorage.setItem("user",JSON.stringify(data))
  })
  }
  return (

    <header className="self-stretch flex flex-row items-end justify-between pt-[0.5rem] pb-[0rem] pr-[2.38rem] pl-[0rem] box-border sticky gap-[1.25rem] top-[0] z-[99] max-w-full text-left text-[0.94rem] text-white font-inter">
      <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-300" />
      <div className="h-[5.38rem] w-[11.13rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="w-[6.19rem] h-[5.5rem] relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/imageedit-10-3049730799-1@2x.png"
        />
      </div>
      <div className="h-[1.75rem] w-[40rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border max-w-full lg:w-[0rem]">
        <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[1.25rem] lg:hidden">
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.38rem] pl-[0rem]">
            <h3 className="m-0 relative text-inherit [text-decoration:underline] capitalize font-semibold font-inherit z-[1]">
              blogs
            </h3>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem]">
            <h3 className="m-0 relative text-inherit capitalize font-light font-inherit z-[1]">
              events
            </h3>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.19rem] pl-[0rem]">
            <h3 className="m-0 relative text-inherit capitalize font-light font-inherit z-[1]">
              achievements
            </h3>
          </div>
          <h3 className="m-0 relative text-inherit capitalize font-light font-inherit z-[1]">
            projects
          </h3>
          <h3 className="m-0 relative text-inherit capitalize font-light font-inherit z-[1]">
            about
          </h3>
        </div>
      </div>
      <div className="w-[4.13rem] relative font-extralight hidden h-[1.44rem] shrink-0 whitespace-nowrap z-[3]">
        Dive in
      </div>
      <div className="w-[9.25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.44rem] box-border">
        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[2.56rem] w-[5.81rem] absolute my-0 mx-[!important] top-[calc(50%_-_20.5px)] left-[-1.69rem] rounded-3xs bg-royalblue z-[1]" />
            <div className="h-[2.44rem] w-[5.69rem] absolute my-0 mx-[!important] top-[calc(50%_-_19.5px)] left-[-1.62rem] rounded-3xs bg-gray-100 z-[2]" />
            <h3 className="m-0 relative text-inherit font-extralight font-inherit whitespace-nowrap z-[3]">
              <button className="m-0" onClick={handleClick}>log in</button>
            </h3>
          </div>
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[2.44rem] w-[5.69rem] absolute my-0 mx-[!important] top-[calc(50%_-_19.5px)] right-[-1.25rem] rounded-3xs bg-royalblue z-[1]" />
            <button className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap z-[2]">
              sign up
            </button>
            
          </div>
            <img src={image} className="w-[30px] h-[30px] rounded-lg" alt="this is image" />
        </div>
      </div>
    </header>
  )
}

export default RectangleComponent6