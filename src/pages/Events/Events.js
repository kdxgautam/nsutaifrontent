import EventCard from "./EventCard"
import Footer from "./Footer"
import Navbar from "./Navbar"


const EventFrame = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center mt-28 pt-[70px] ">
        <div className="text-center  w-[450px] min-w-[300px] flex flex-col pl-7">
          <h1 className="text-[#BBBCC0] text-5xl lg:text-7xl">
            Lorem ipsum dolor, sit amet
          </h1>
          <h6 className="text-[#BBBCC0] mt-4">Lorem ipsum dolor, sit amet</h6>
        </div>

        <div className="w-1/2 items-center flex justify-center h-3/4 pr-[2vw]">
          <img className="absolute opacity-0 md:opacity-100 md:relative  md:top-[-15vw] md:right-[-120px] max-w-full " src="/images/vector.png" alt="vector" />
          <img className="max-w-full " src="/images/robot.png" alt="robot" />
          <img className="absolute opacity-0 md:opacity-100 md:relative  md:top-[100px] max-w-full" src="/images/vector2.png" alt="vector" />
        </div>
        
      </div>
      <div className="flex flex-col w-full items-center my-20">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <Footer />
    </>
  )
}

export default EventFrame