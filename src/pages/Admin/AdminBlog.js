import React from "react";
import UpdationModal from "../../components/UpdationModal";
import { useState } from "react";

const AdminBlog = () => {
  const [data, setData] = useState({
    title: "",
    picture: "",
    content: "",
    slug: "",
    author: "",
  });
  const details = {
    modalTitle: "Create New Blog",
    inputs: [
      { title: "title", placeholder: "Enter Title", type: "text" },
      { title: "picture", placeholder: "Upload Picture", type: "file" },
      { title: "slug", placeholder: "Enter Slug" },
      { title: "author", placeholder: "Enter name" },
    ],
    buttonContent: "Add Blog",
    endpoint: "blogs/create",
  };
  return (
    <>
      <div>AdminBlog</div>
      <UpdationModal
        classname="flex justify-center"
        details={details}
        data={data}
        setData={setData}
      />
    </>
  );
};

export default AdminBlog;
