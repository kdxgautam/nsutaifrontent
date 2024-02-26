import ProfileCard from "./components/ProfileCard";
import DepartmentsList from "./components/DepartmentsList";
import DepartmentsMob from "./components/DepartmentsMob";
import { useEffect, useState } from "react";
const host = "http://127.0.0.1:4000";


  
  
const AboutPage = () => {
    const [profile, setProfile] = useState([]);
 




  const fetchProfile = async () => {
    let res = await fetch(host + "/about/all");
    let resdata = await res.json();
    setProfile(resdata);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
    return (
        <>
            <main className="overflow-hidden">
                <div className="text-center pt-44 pb-12">
                    <h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">About NSUT.AI</h1>
                </div>
                <div className="flex justify-center items-center w-full ">
                    <img src="/images/about.jpg" alt="aboutimage" className=" rounded-[4rem] h-full w-1/2  " />
                </div>
                <div className="pt-12 flex items-center justify-center">
                    <p className="text-center text-[#BBBCC0] font-light text-[0.8rem] md:text-[1.2rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br />
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br />
                        culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <div className="text-center pt-36 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">Departments</h1></div>
                <div className="md:flex items-center justify-center hidden "><DepartmentsList/></div>
             <div className="md:flex items-center justify-center md:hidden md:max-xl:hidden xl:hidden "><DepartmentsMob/></div>
                <div className="text-center pt-36 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">Core Members</h1></div>
             <div className="flex justify-center items-center gap-2 xl:px-[33rem] font-light md:max-xl:text-sm px-[2rem] md:max-xl:px-[2rem] pb-[4rem] ">
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Software Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Research Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[3rem] xl:w-[4rem]  xl:h-[1.8rem] text-center pt-1">All</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">AI&ML Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.5rem] sm:text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Graphics Department</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {profile.length!==0 ? profile.map((event)=>(<ProfileCard key={profile._id} id={profile._id} name = {event.name} image={event.image} />)) : <h1 className="text-white">No profile found</h1> }
                
            </div>
            <div className="pt-44">
                </div>

            </main>

        </>


    )
}

export default AboutPage;