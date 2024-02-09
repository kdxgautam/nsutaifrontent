import React from "react";

const Featured = () => {
  return (
    <div class="bg-white dark:bg-gray-900 py-9">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          class="w-full hidden dark:block rounded-2xl"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div class="mt-4 md:mt-0">
          <div className="flex py-5 text-white">
            <h5>January 26th,2024 </h5>
            <div className="rounded-full ml-5 mr-3 w-3 h-3 bg-[#ABB9ED] m-auto"></div>
            <h5 className="text-slate-200 animate-text bg-gradient-to-r from-purple-500 via-[#ABB9ED] to-orange-500 bg-clip-text text-transparent">
              Featured{" "}
            </h5>
          </div>
          <div className="flex py-5 text-white">
            <img
              className="rounded-full h-9 w-9 mr-4 "
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="author image"
            />
            <h5 className="pt-2">Author's name </h5>
          </div>
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          </h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla
            blanditiis sit debitis expedita, optio facilis quod vel repudiandae,
            nesciunt atque delectus ipsum totam. Cumque quisquam dolorem nisi
            quasi reprehenderit.
          </p>
          <a
            href="#"
            class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Read More
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
