import ProfileCard from "./components/ProfileCard";
import DepartmentsList from "./components/DepartmentsList";

const AboutPage = () => {
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
                    <p className="text-center text-[#BBBCC0] font-light text-[0.8rem] md:max-xl:text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu<br />
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br />
                        culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <div className="text-center pt-36 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">Departments</h1></div>
                <div className="flex items-center justify-center"><DepartmentsList /></div>
                <div className="text-center pt-36 pb-12"><h1 className="text-xl text-[#BBBCC0] font-inter font-normal md:max-xl:text-md">Core Members</h1></div>
                <div className="text-white flex space-x-4 m-5 pr-[60px] max-lg:flex-wrap max-lg:pr-0 max-lg:justify-center lg:w-full">
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-1/3 bg-gray-800 my-2 py-2 xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Software Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-1/3 bg-gray-800 my-2 py-2 xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Research Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-1/3 bg-gray-800 my-2 py-2 xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">AI&ML Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-1/3 bg-gray-800 my-2 py-2 xl:w-[16rem] xl:h-[1.8rem] text-center pt-1">Graphics Department</div>
                    <div className="hover:bg-[#415ED0] cursor-pointer rounded-2xl text-[0.8rem] w-1/3 bg-gray-800 my-2 py-2 xl:w-[4rem]  xl:h-[1.8rem] text-center pt-1">All</div>
                </div>
                <div className="flex-col">
                    <div className="sm:flex sm:flex-wrap grid md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 ">
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div>


                </div>
                <div className="pt-44">
                </div>

            </main>

        </>


    )
}

export default AboutPage;