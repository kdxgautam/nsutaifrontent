import Footer from "../../components/footer"
import Navbar from "../../components/Navbar"
import ProfileCard from "./components/ProfileCard"

const ProfilePage = () => {
    return (
        <>
        <main>
            <nav><Navbar/></nav>
            <div className="flex justify-center items-center pt-[4rem]"><ProfileCard/></div>
            <div className="flex items-center justify-center ">  
            <div className="flex-col justify-center items-center xl:w-[80rem] xl:h-[40rem] w-[30rem] bg-[#121216] rounded-[4rem]">
                               
                <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem]">Department:</h2>
                <h4 className="font-light pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] opacity-70">Software</h4>

                <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[2rem] ">Achievements:</h2>
                <h4 className="font-light  pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] opacity-70 align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    cididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis 
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute</h4>

                <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem] ">Skills:</h2>
                <div className=" pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem]">
                    <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">React</button>
                    <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">Javascript</button>
                    <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">Tailwind</button>
                    <button className="bg-[#415ED0] mx-1 border text-white px-4 py-2 rounded-full">Figma</button>
                </div>

                <h2 className="text-white pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[4rem]">Connect at:</h2>
                <div className="pl-[4rem] pt-[2rem] xl:pl-[6rem] xl:pt-[1rem] pb-[2rem] flex">
                    <img src="github.png" alt="" className="w-[3rem]"></img>
                    <img src="linkedin.png" alt=""></img>
                    </div>
                </div>


                
                </div>
                
            <div className="pt-52"><Footer/></div>
        </main>
        </>
    )
}

export default ProfilePage