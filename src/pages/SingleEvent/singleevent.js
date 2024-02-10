import Footer from "./Footer";
import Navbar from "./NavBar";

const SingleEvent = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          className="h-[30rem] w-[100%]"
          src="https://cdn.wallpapersafari.com/14/40/pPnVIZ.jpg"
        />
        <div className=" relative bottom-20 text-3xl  flex justify-center items-end text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="flex just text-white p-[5rem] pt-[4rem]">
        <div className=" pl-20 pr-[30rem] text-justify leading-5 ">
          <span className="text-4xl  ">Event Details</span>
          <br />
          <span className="text-xl leading-10">
            Venue : Connecting Block
            <br />
            Time : 11am-3pm
          </span>
          <ul class="list-disc">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dignissimos expedita omnis vero minima molestiae
              suscipit assumenda enim. Dolores et optio, atque nam maxime libero
              laborum sit provident neque perspiciatis.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              earum veniam, recusandae sequi deserunt omnis quam reprehenderit
              eaque molestiae saepe quis, nemo sit similique odio sint,
              provident nostrum delectus! Voluptate?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam
              quisquam ea quibusdam fugit est ipsa excepturi quae, quod tenetur
              quos similique reprehenderit odit minus, eveniet iure debitis
              sequi velit.
            </li>
          </ul>
          <button className="bg-[#415ED0] mx-1 text-white px-4 py-2 mt-6 rounded-full transition duration-200 ease-in-out hover:bg-blue-700  focus:outline-none">
            Register Here
          </button>
        </div>
        <div className="relative right-[15rem] bg-[#202127] h-[4rem] w-[70rem] mt-20  rounded-xl  ">
          <span className="p-5">Registration Ends In:</span>
          <br />
          <span className="pl-[3.5rem] text-xl">06:55:35</span>
        </div>
        <div className="relative right-[8rem]  top-[9rem]">
          <img className="h-[25rem] w-[100rem]" src="images/robot.png" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleEvent;
