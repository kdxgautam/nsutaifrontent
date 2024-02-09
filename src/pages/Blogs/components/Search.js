import React from "react";

const Search = () => {
  return (
    <div className="flex justify-between my-[80px] mx-5 ml-[60px] max-lg:ml-0 max-lg:block ">
      <div className="w-1/4 max-lg:w-full">
        <form>
          <input
            placeholder="Search"
            className=" rounded-3xl text-grey-300 bg-black bg-opacity-[63%] p-3 m-3 w-full focus:outline-none focus:ring-2 ring-[#415ED0] shadow-2xl"
          />
        </form>
      </div>
      <div>
        <ul className="text-white flex space-x-4 m-5 pr-[60px] max-lg:flex-wrap max-lg:pr-0 max-lg:justify-center">
          <li className="p-3 rounded-3xl hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            All
          </li>
          <li className="p-3 rounded-3xl hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Recent
          </li>
          <li className="p-3 rounded-3xl hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Machine Learning
          </li>
          <li className="p-3 rounded-3xl hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Engineering
          </li>
          <li className="p-3 rounded-3xl hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Programing
          </li>
          <li className="p-3 rounded-3xl hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Research
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
