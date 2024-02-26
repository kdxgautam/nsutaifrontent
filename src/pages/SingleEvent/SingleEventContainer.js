import React, { useEffect, useState } from "react";
import SingleEventFunc from "./SingleEvent";
const host = "http://127.0.0.1:4000";

const SingleEventCardContainer = () => {
  const [SingleEvents, setSingleEvents] = useState([]);

  const fetchsingleEvent = async () => {
    let res = await fetch(host + "/events/all");
    let resdata = await res.json();
    setSingleEvents(resdata);
  };
  useEffect(() => {
    fetchsingleEvent();
  }, []);
  return (
    <div className=" py-5 place-items-center grid-custom   ">
        
      {SingleEvents.length !== 0 ? (
        SingleEvents.map((event) => (
          <SingleEventFunc
            image={event.image}
            description={event.description}
            title={event.title}
            date={event.date}
            venue={event.venue}
            status={event.status}
          />
        ))
      ) : (
        <h1 className="text-white">No events found</h1>
      )}
    </div>
  );
};

export default SingleEventCardContainer;
