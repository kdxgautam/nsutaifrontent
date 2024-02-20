import { Link } from "react-router-dom";


const SignUp  = () => {
    return (
      <div className="flex justify-center mt-[2rem]">
        <section className="">
          <div className="border border-white  flex items-center justify-center px-8 py-8 sm:px-10 sm:py-12 lg:px-20 lg:pt-4 lg:pb-6">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2 flex justify-center">
                <img src="/images/nsutailogo.png" alt="" />
              </div>
              <h2 className="text-center text-2xl font-bold leading-tight text-white">
                Sign Up
              </h2>
              <p className="mt-2 text-center text-sm text-white ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  title=""
                  className=" text-white font-bold transition-all duration-200 hover:underline"
                >
                  Login
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
                      Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Name"
                      ></input>
                    </div>
                  </div>
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
                      Sign Up
                      
                    </button>
                  </div>
                </div>
              </form>
              <div className="text-white text-center text-[1.2rem]">or</div>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
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
  
  export default SignUp