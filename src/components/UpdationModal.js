import React, { useContext, useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Admincontext from "../context/Admincontext";


const UpdationModal = ({ id, variant , element}) => {

  const { variants } = useContext(Admincontext);
  const host = "http://localhost:4000/";
  const [showModal, setShowModal] = useState(false);
  const admin = localStorage.getItem("AdminToken");


  const [data, setData] = useState({...element});

  const onChange = async (e) => {
    
    setData({ ...data, [e.target.name.toLowerCase()]: e.target.value });
    console.log(data)
  };

  const submit = async (data) => {
    const res = await fetch(`${host}${variant}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        token: admin,
      },
      body: JSON.stringify(data),
    });

    let resdata= await res.json()
    console.log(resdata)
    if(resdata.success){
      alert("Updated Succesfully")
    }
    else{
      alert(resdata.error)
    }

  };

  const modalTrigger = async () => {
    
    setShowModal(!showModal);

  };
  

  return (
    <div className="flex justify-center w-full">
      <button
        onClick={modalTrigger}
        data-modal-toggle="#crud-modal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Edit
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm  z-50">
          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            class=" overflow-y-auto overflow-x-hidden fixed z-50 mt-5 bg-transparent w-full flex justify-center md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-[80%] max-h-full ">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Data
                  </h3>
                  <button
                    onClick={modalTrigger}
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="#crud-modal"
                  >
                    <IoIosClose className="h-8 w-8" />
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <form class="p-4 md:p-5">
                  <div class="grid gap-4 mb-4 grid-cols-2">
                    {variant &&
                      variants[variant].inputs.text.map((detail) => {
                        return (
                          <div class="col-span-2">
                            <label
                              for="name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              {detail}
                            </label>
                            <input
                              type="text"
                              name={detail}
                              id={detail}
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder={`Enter ${detail}`}
                              onChange={onChange}
                              defaultValue={element[`${detail.toLowerCase()}`]}
                              value={data.detail}
                              required=""
                            />
                          </div>
                        );
                      })}
                    <div class="col-span-2">
                      <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Content/description
                      </label>
                      <textarea
                        id="description"
                        name="content"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write Content here"
                        onChange={onChange}
                        defaultValue={element.description}
                        value={data.detail}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      submit(data);
                    }}
                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaPlus className="mr-1" />
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdationModal;
