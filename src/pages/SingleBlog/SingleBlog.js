import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { FaRegShareSquare } from "react-icons/fa";

const SingleBlog = () => {
  return (
    <div className=" flex flex-col  mx-[20%] mt-[5%] px-[30px] max-lg:mx-[2%] max-lg:px-[10px]">
      <img
        className="  h-[20rem] lg:h-[30rem] rounded-2xl mb-11"
        src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex space-x-2">
        <h5>Technology</h5>
        <h5>|</h5>
        <h5>January 26,2024</h5>
      </div>
      <div className="flex space-x-3 my-5">
        <img
          className="rounded-full h-7 w-7  "
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="author image"
        />
        <div className="flex flex-col">
          <h5 className="pt-1">Author's name </h5>
          <div className="flex  pt-3 space-x-4 ">
            <AiOutlineLike className=" h-5 w-5" />
            <TfiCommentAlt className="h-5 w-5" />
            <FaRegShareSquare className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-11 text-4xl tracking-tight font-extrabold text-white-500 max-lg:text-3xl">
          Find more great partners
        </h1>
        <prev className="leading-loose">
          It really matters and then like it really doesn't matter. What matters
          is the people who are sparked by it. And the people who are like
          offended by it, it doesn't matter. We are here to make life better.
          And now I look and look around and there's so many Kanyes I've been
          trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.I speak yell scream directly at the old
          guard on behalf of the future. daytime All respect prayers and love to
          Phife's family Thank you for so much inspiration. "And thank you for
          turning my personal jean jacket into a couture piece." avatar — Kanye
          West, Producer And now I look and look around and there's so many
          Kanyes I've been trying to figure out the bed design for the master
          bedroom at our Hidden Hills compound... and thank you for turning my
          personal jean jacket into a couture piece. I love this new Ferg album!
          The Life of Pablo is now available for purchase I have a dream. Thank
          you to everybody who made The Life of Pablo the number 1 album in the
          world! I'm so proud of the nr #1 song in the country. Panda! Good
          music!
        </prev>
      </div>
      <div>
        <h3 className="texl-lg text-white my-11 underline-offset-8 underline decoration-wavy decoration-[#415ED0]">
          Tags:
        </h3>
        <ul className="text-white flex space-x-4 my-5  max-lg:flex-wrap max-lg:pr-0 gap-3">
          <li className="p-3 rounded-3xl  bg-black bg-opacity-[63%] hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Machine Learning
          </li>
          <li className="p-3 rounded-3xl bg-black bg-opacity-[63%] hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Engineering
          </li>
          <li className="p-3 rounded-3xl bg-black bg-opacity-[63%] hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Programing
          </li>
          <li className="p-3 rounded-3xl bg-black bg-opacity-[63%] hover:bg-[#415ED0] active:bg-[#415ED0] cursor-pointer">
            Research
          </li>
        </ul>
      </div>
      <div class="bg-gray-900 py-8 lg:py-16 antialiased rounded-lg my-11">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-white">Comments</h2>
          </div>
          <form class="mb-6">
            <div class="py-2 px-4 mb-4  rounded-lg rounded-t-lg border bg-gray-800 border-gray-700">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                class="px-0 w-full text-sm text-gray-400 border-0 focus:ring-0 focus:outline-none  placeholder-gray-400 bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 text-xs border-2 border-transparent hover:shadow-black-900/20 hover:bg-transparent hover:border-2 hover:border-[#415ED0] font-medium text-center text-white bg-[#415ED0] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Post comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
