import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/modal";
import Admincontext from "../../../context/Admincontext";
import Authcontext from "../../../context/Authcontext";
import UpdationModal from "../../../components/UpdationModal";
const host = "http://localhost:4000/";
const AdminOperations = () => {
  const params = useParams();
  const [items, setitems] = useState([]);
  const { togglemodal } = useContext(Admincontext);
  const { admin } = useContext(Authcontext);
  const navigation = useNavigate();
  const fetchthings = async (data) => {
    const res = await fetch(host + data + "/all");
    const resdata = await res.json();
    setitems(resdata);
  };

  const onDelete = async (id) => {
    const res = await fetch(`${host}${params.operation}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "Application/json",
        token: localStorage.getItem("AdminToken"),
      },
    });
    let resdata = await res.json();
    if (resdata.success) {
      alert("deleted successfully");
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    fetchthings(params.operation);
    if (!admin) {
      navigation("/admin/auth");
    }
  }, [params, admin]);
  return (
    <div className="h-[100vh] w-full flex flex-col px-5">
      <Modal variant={params.operation} />
      <h1 className="w-full text-center text-2xl my-3">{params.operation}</h1>

      <h1 className="w-full  text-2xl my-3 text-white ">
        Create {params.operation}
      </h1>
      <button className="w-[6rem] border p-2 rounded-xl " onClick={togglemodal}>
        Add{" "}
      </button>
      <h1 className="w-full  text-2xl my-3">present: {params.operation}</h1>
      <div className="relative flex flex-col  text-white  shadow-md rounded-xl bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  {params.operation}
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  title
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Created on
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && <div>no {params.operation} found</div>}
            {items.length !== 0 &&
              items.map((e) => (
                <tr className="w-full">
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {e.title}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {e.description.slice(0, 20)}...
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {e.createdAt}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <button className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                      <UpdationModal variant={params.operation} all={e} />
                    </button>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <button
                      className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                      onClick={() => {
                        onDelete(e._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOperations;
