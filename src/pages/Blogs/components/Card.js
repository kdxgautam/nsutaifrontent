import React from "react";

const Card = () => {
  return (
    <div class="relative flex flex-col mt-6 text-white-700 bg-black bg-opacity-[63%] bg-clip-border shadow-2xl card  rounded-2xl  ">
      <div class="relative h-full mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="card-image"
        />
      </div>
      <div class="p-6 ">
        <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
          UI/UX Review Check
        </h5>
        <p class="block font-sans text-white antialiased font-light leading-relaxed text-inherit">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
      <div class="p-6 pt-0">
        <button
          class="align-middle select-none font-sans font-bold text-center uppercase transition-all border-2 border-transparent disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#415ED0] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-black-900/20 hover:bg-transparent hover:border-2 hover:border-[#415ED0] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
