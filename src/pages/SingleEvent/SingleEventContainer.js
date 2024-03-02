import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleEventFunc from "./SingleEvent";

const host= process.env.REACT_APP_BACKEND

const SingleEventCardContainer = () => {
  const [event, setEvent] = useState([]);
  const {eventid} = useParams

  const fetchthings = async () => {
    const token = localStorage.getItem("AdminToken");
    console.log(token);
    if (!token) {
      alert("Not authorised");
      return;
    }

    const res = await fetch(`${host}/events/${eventid}`, {
      method: "GET",
      headers: {
        token: token,
      },
    });
    const resdata = await res.json();
    console.log(resdata);
    setEvent(resdata);
  };
  useEffect(() => {
    fetchthings();
  }, []);

  return (
    <div className=" py-5 place-items-center grid-custom   ">
        
          <SingleEventFunc
            image={event.image}
            description={event.description}
            title={event.title}
            date={event.date}
            venue={event.venue}
            status={event.status}
          />
      
    </div>
  );
};

export default SingleEventCardContainer;
