import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
  const navigation = useNavigate();
  const navig = (id) => {
    navigation(`/events/${id}`);
  };
  const { id, title, description, date, image, status } = props;



    return (
      <div
        className="w-[90%] flex flex-col bg-[#131417] text-white p-10 rounded-[35px] my-[30px] md:flex-row "
        
      >
        <img
          className="pb-[1.5rem] self-center w-[300px]  pl-[2.2rem] pr-[1.5rem] md:p-0 md:self-auto"
          src={image}
          alt=""
        />
        <div className="pl-[2.2rem] pr-[1.5rem]">
          <h1 className="text-[2rem] cursor-pointer " onClick={() => navig(id)}>{title}</h1>
          <h3 className="pb-[30px]">{description}</h3>
          <div className="flex items-center">
            <div
              className={`${
                status ? "bg-green-400" : "bg-red-700"
              } w-[20px] h-[20px] rounded-[50%]`}
            ></div>
            <p>
              {" "}
              &nbsp; {status ? " Ongoing" : "Closed"} &nbsp; | &nbsp; {date}
            </p>
          </div>
        </div>
      </div>
    );
  };
;

export default EventCard;
