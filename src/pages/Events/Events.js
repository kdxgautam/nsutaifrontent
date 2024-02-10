import EventCard from "./components/EventCard"
import Footer from "../../components/footer"
import Navbar from "../../components/Navbar"


const EventFrame = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center mt-28 pt-[70px]">
        <div className="text-center  w-[450px] min-w-[300px] flex flex-col translate-x-14">
          <h1 className="text-[#BBBCC0] text-5xl ">
            Lorem ipsum dolor, sit amet
          </h1>
          <h6 className="text-[#BBBCC0]">Lorem ipsum dolor, sit amet</h6>
        </div>

        <div className="w-1/2 items-center flex justify-center h-3/4 -translate-x-14">
          <img className="relative top-[-200px] right-[-120px] max-w-full" src="/images/vector.png" alt="" />
          <img className="max-w-full" src="/images/robot.png" alt="" />
          <img className="max-w-full relative top-[100px] right-[]" src="/images/vector2.png" alt="" />
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