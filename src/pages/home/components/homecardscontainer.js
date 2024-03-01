import React, { useEffect, useState } from "react";
import HomeCard from "./homecard";
const host = process.env.REACT_APP_BACKEND;
const HomeCardsContainer = (props) => {
  const { type, link } = props;
  const [data, setdata] = useState([]);
  const fetchthings = async () => {
    const res = await fetch(`${host}/${type}/all`);
    const resdata = await res.json();
    setdata(resdata);
  };
  useEffect(() => {
    fetchthings();
  }, []);
  return (
    <div
      className="sm:flex sm:flex-wrap sm:items-center  md:grid md:grid-cols-2 lg:grid-cols-3
     w-4/5  my-3 justify-items-center py-2 "
    >
      {data.length > 0 &&
        data.map((e) => (
          <HomeCard
            image={e.image ? e.image : "/images/img.jpg"}
            link={link}
            element={e}
          />
        ))}
    </div>
  );
};

export default HomeCardsContainer;
