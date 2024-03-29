import React, { useEffect, useState } from "react";
import Card from "./Card";
const host = process.env.REACT_APP_BACKEND;

const CardContainer = () => {
  const [blogs, setblogs] = useState([]);

  const fetchblogs = async () => {
    let res = await fetch(host + "/blogs/all");
    let resdata = await res.json();
    setblogs(resdata);
  };
  useEffect(() => {
    fetchblogs();
  }, []);
  return (
    <div className=" py-5 place-items-center grid-custom   ">
      {blogs.length !== 0 ? (
        blogs.map((blog) => (
          <Card
            image={blog.image}
            content={blog.description}
            title={blog.title}
            author={blog.author}
            comments={blog.comments.length}
            id={blog._id}
          />
        ))
      ) : (
        <h1 className="text-white">No blogs found</h1>
      )}
    </div>
  );
};

export default CardContainer;
