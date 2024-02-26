import{ EventCard} from "./components/EventCard";
import { useEffect, useId, useState } from "react";
const host = "http://localhost:4000";

const Event = () => {
  
  const [events, setEvents] = useState([]);
 




  const fetchEvents = async () => {
    let res = await fetch(host + "/events/all");
    let resdata = await res.json();
    setEvents(resdata);
  };
  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <>
      <div className="flex w-full justify-center items-center mt-28 pt-[70px] ">
        <div className="text-center  w-[450px] min-w-[300px] flex flex-col pl-7">
          <h1 className="text-[#BBBCC0] text-5xl lg:text-7xl">
            Lorem ipsum dolor, sit amet
          </h1>
          <h6 className="text-[#BBBCC0] mt-4">Lorem ipsum dolor, sit amet</h6>
        </div>

        <div className="w-1/2 items-center flex justify-center h-3/4 pr-[2vw]">
          <img
            className="absolute opacity-0 md:opacity-100 md:relative  md:top-[-15vw] md:right-[-120px] max-w-full "
            src="/images/vector.png"
            alt="vector"
          />
          <img className="max-w-full " src="/images/robot.png" alt="robot" />
          <img
            className="absolute opacity-0 md:opacity-100 md:relative  md:top-[100px] max-w-full"
            src="/images/vector2.png"
            alt="vector"
          />
        </div>
      </div>
      <div className="flex flex-col w-full items-center my-20">

        
        {events.length!==0 ? events.map((event)=>(<EventCard key={event._id} id={event._id} title = {event.title} description= {event.description} date = {event.date} image={event.image} status ={event.status}/>)) : <h1 className="text-white">No blogs found</h1> }
      
      </div>
    </>
  );
};

export default Event;
