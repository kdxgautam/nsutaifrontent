
import { useContext, useEffect } from "react";
import Authcontext from "../../context/Authcontext";
import { Link, useNavigate } from "react-router-dom";


const Login  = () => {
  const {user, handlesignin}= useContext(Authcontext)

  const navigation = useNavigate()
  useEffect(()=>{
    if(user){
      navigation("/")
    }
  })
    return (
      <div className="flex justify-center mt-[2rem]">
        <section className="">
          <div className="border border-white  flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-14 lg:py-22">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2 flex justify-center">
                <img src="/images/nsutailogo.png" alt="" />
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight text-white">
                Login in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-white ">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  title=""
                  className=" text-white font-bold transition-all duration-200 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-white"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-white"
                      >
                        {" "}
                        Password{" "}
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
                        placeholder="Password"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Register
                      
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-white text-center text-[1.2rem]">or</div>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  onClick={handlesignin}
                >
                  <span className="mr-2 inline-block">
                  <img src="/images/google.png" className="h-6 w-6" alt="" />
                 
                  </span>
                  Continue with Google
                </button>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Login