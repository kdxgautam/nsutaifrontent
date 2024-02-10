import ProfileCard from "./components/ProfileCard";
import DepartmentsList from "./components/DepartmentsList";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const AboutPage = () => {
    return(
        <>
        <main className="overflow-hidden">
            <nav><Navbar/></nav>
            <div className="text-center pt-44 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">About NSUT.AI</h1></div> 
            <div className="flex justify-center items-center"><img src="about.jpg" alt="aboutimage" className=" rounded-[4rem] xl:h-96 xl:w-144 h-72 "/></div>
            <div className="pt-12 flex items-center justify-center"><p className="text-center text-[#BBBCC0] font-light text-[0.8rem] md:max-xl:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br/>
             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br/>
             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br/>
             culpa qui officia deserunt mollit anim id est laborum.</p></div> 
             <div className="text-center pt-36 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">Departments</h1></div>
             <div className="flex items-center justify-center"><DepartmentsList/></div>
             <div className="text-center pt-36 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">Core Members</h1></div>
             <div className="flex justify-center items-center justify-between xl:px-[33rem] font-light md:max-xl:text-sm px-[2rem] md:max-xl:px-[2rem] ">
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Software Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Research Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-[3rem] xl:w-[4rem]  xl:h-[1.8rem] text-center pt-1">All</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">AI&ML Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-[7rem] xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Graphics Department</div>
            </div>
            <div className="flex-col">
                <div className="flex justify-center items-center md:max-xl:gap-[8rem] gap-[4rem]">
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                </div>
                <div className="flex justify-center items-center md:max-xl:gap-[8rem] gap-[4rem]">
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                </div>
            

            </div>
            <div className="pt-44">
            <Footer/>
            </div>

        </main>
         
        </>
        

    )
}

export default AboutPage;