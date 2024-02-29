import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";


const AdminAuth = () => {
  const [data, setdata] = useState({ email: "", password: "" });

  const navigation = useNavigate();

  const { admin,setadmin, handleAdminLogin } = useContext(Authcontext);
  const handleonChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const fetchadmin=async()=>{
    if(!localStorage.getItem("AdminToken")){
      return;
    }
    const res= await fetch("http://localhost:4000/admin/login",{
      method:"POST",
      headers:{
        "content-type":"application/json",
        token : localStorage.getItem("AdminToken")
      }
    })
    const resdata = await res.json()
    setadmin(resdata)
  }




  useEffect(() => {
    fetchadmin()
    if (admin) {
      navigation("/admin");
    }
  }, [admin, navigation]);
  return (
    <div className="flex justify-center mt-[2rem]">
      <section className="">
        <div className="border border-white  flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-14 lg:py-22">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/images/nsutailogo.png" alt="" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-white">
              Login To Admin Account
            </h2>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleonChange}
                      value={data.value}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-white"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgotpass"
                      title=""
                      className="text-sm font-semibold text-white hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={data.password}
                      onChange={handleonChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAdminLogin(data);
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


export default AdminAuth;
