const SingleEventFunc = (props) => {
  const { title, description, date, venue, image, status } = props;
  return (
    <>
      <div>
        <img
          className="w-full h-auto max-h-[30rem]"
          src={image}
          alt="Event Image"
        />
        <div className="relative bottom-10 sm:bottom-20 text-lg sm:text-xl sm:flex md:text-2xl lg:text-3xl xl:text-4xl flex justify-center items-end text-white">
          {title}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center text-white p-5 sm:px-10 lg:px-20 xl:px-40 pt-4 lg:ml-20">
        <div className="text-justify ml-[1rem] leading-5 sm:mr-4">
          <span className="text-4xl">Event Details</span>
          <br />
          <span className="text-xl leading-10">
            Venue: {venue}
            <br />
            Date:{date}
          </span>
          <ul className="list-disc">{description}</ul>
          <button className="bg-[#415ED0] mx-1 text-white px-4 py-2 mt-6 rounded-full transition duration-200 ease-in-out hover:bg-blue-700 focus:outline-none">
            Register Here
          </button>
        </div>
        <div className="sm:hidden mt-4">
          <span>Registration Ends In:</span>
          <br />
          <span className="text-xl">06:55:35</span>
        </div>
        <div className="hidden sm:block relative h-[4rem] w-[15rem] mt-4 sm:mt-3 ml-0 sm:ml-4 bg-[#202127] lg:ml-8 bottom-[8rem] right-[4.5rem] rounded-xl justify-center">
          <span className="p-5">Registration Ends In:</span>
          <br />
          <span className="pl-[3rem] text-xl">06:55:35</span>
        </div>
        <div className="relative mt-4 sm:mt-0 sm:right-[8rem] lg:top-[1rem]">
          <img
            className="w-full h-auto max-h-[25rem] sm:max-w-[35rem]"
            src="images/robot.png"
            alt="Robot Image"
          />
        </div>
      </div>
    </>
  );
};

export default SingleEventFunc;
