import React, { useContext, useState } from "react";
import Admincontext from "../context/Admincontext";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
const Modal = (props) => {
    const { variant } = props;
    const {
        showmodal,
        token,
        settoken,
        variants,
        handleModalSubmit,
        togglemodal,
    } = useContext(Admincontext);


    const [data, setdata] = useState({ title: "", description: "", author: "", image: "", slug: "", department: "", github: "", venue: "" })

    const resetdata = () => {
        setdata({ title: "", description: "", author: "", image: "", slug: "", department: "", github: "", venue: "" })
    }
    const handleonchange = async (e) => {
        setdata({ ...data, [e.target.name.toLowerCase()]: e.target.value })
        console.log(data)
    }





    const handleimagechange = (e) => {
        setdata({ ...data, image: e.target.files[0] });
    };

    const fetchtoken = () => {
        settoken(localStorage.getItem("AdminToken"));
        console.log(localStorage.getItem("AdminToken"));
    };
    useState(() => {
        fetchtoken();
    });
    return (
        <div
            className={`w-[98%] h-3/4  ${showmodal == false ? "hidden" : "flex"
                } justify-center absolute z-20  `}
        >
            <div className="w-1/2   bg-gray-800  rounded-xl ">
                <div className="relative flex flex-col p-5">
                    <div
                        className="text-red-400 absolute right-4 text-2xl cursor-pointer top-2"
                        onClick={togglemodal}
                    >
                        <IoMdClose />
                    </div>
                    {variant &&
                        variants[variant].inputs.text.map((t) => (
                            <div className="my-2 flex flex-col">
                                <label htmlFor={t} className="text-xl">
                                    {t}
                                </label>
                                <input
                                    type={t === "image" ? "file" : "text"}
                                    name={t}
                                    id={t}
                                    onChange={t === "image" ? handleimagechange : handleonchange}
                                    value={data.t}
                                    placeholder={`Enter ${t}`}
                                    className="p-2 rounded-xl text-xl text-black"
                                />
                            </div>
                        ))}
                </div>
                <div className="flex flex-col p-5">
                    {variant &&
                        variants[variant].textarea.map((e) => (
                            <div className="flex flex-col">
                                <label htmlFor={e} className="text-xl">
                                    {e}
                                </label>
                                <textarea
                                    type="text"
                                    name={e}
                                    value={data.e}
                                    onChange={handleonchange}
                                    placeholder={`Enter ${e}`}
                                    id={e}
                                    rows={7}
                                    cols={5}
                                    className="p-2 rounded-xl text-xl text-black"
                                />
                            </div>
                        ))}
                </div>
                <div
                    className="flex p-4"
                    onClick={() => {
                        handleModalSubmit(data, "POST", variant, "create", token, setdata);
                        resetdata();
                    }}
                >
                    {variant &&
                        variants[variant].button.map((e) => (
                            <Button bgColor="bg-black">{e}</Button>
                        ))}
                </div>
            </div>
        </div>
    );

}
export default Modal;
