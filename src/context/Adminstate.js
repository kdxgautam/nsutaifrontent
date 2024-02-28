import { useState } from "react";
import Admincontext from "./Admincontext";
const host = "http://localhost:4000";

const AdminState = (props) => {
  const [showmodal, setshowmodal] = useState(false);
  const [token, settoken] = useState(null);
  const [variants, setvariants] = useState({
    blogs: {
      inputs: { text: ["Title", "Slug", "Author", "image"], file: "image" },
      textarea: ["Description"],
      button: ["Submit"],
    },
    projects: {
      inputs: {
        text: ["Title", "Department", "github", "image"],
        file: "image",
      },
      textarea: ["Description"],
      button: ["Submit"],
    },
    events: {
      inputs: { text: ["Title", "Venue", "image"], file: "image" },

      textarea: ["Description"],
      button: ["Submit"],
    },
  });

  const addToCloudinary = async (data) => {
    console.log(data.image);
    const form = new FormData();
    form.append("file", data.image);
    form.append("upload_preset", "nsut-ai");
    form.append("cloud_name", "djxl5ybch");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/djxl5ybch/image/upload",
      {
        method: "POST",
        body: form,
      }
    );
    const update = await res.json();
    console.log(update);
    return update.url;
  };

  const handleModalSubmit = async (
    data,
    requestType,
    variant,
    operation,
    token,
    setdata
  ) => {
    if (!token) {
      console.log("token not found");
      return;
    }
    const link = await addToCloudinary(data);
    console.log(link);
    setdata({ ...data, image: link });
    console.log(data);
    const res = await fetch(`${host}/${variant}/${operation}`, {
      method: requestType,
      body: JSON.stringify(data),
      headers: {
        token: token,
        "content-type": "application/json",
      },
    });
    const resdata = await res.json();
    alert(resdata);
  };
  const togglemodal = () => {
    setshowmodal(!showmodal);
  };
  return (
    <Admincontext.Provider
      value={{
        showmodal,
        setshowmodal,
        variants,
        handleModalSubmit,
        togglemodal,
        token,
        settoken,
      }}
    >
      {props.children}
    </Admincontext.Provider>
  );
};
export default AdminState;
