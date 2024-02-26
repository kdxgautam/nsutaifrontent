import React, { useEffect, useState } from "react";
import Card from "./Card";
const host = "http://127.0.0.1:4000";

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
            content={blog.content}
            title={blog.title}
            author={blog.author}
            comments={blog.comments.length}
          />
        ))
      ) : (
        <h1 className="text-white">No blogs found</h1>
      )}
    </div>
  );
};

export default CardContainer;
