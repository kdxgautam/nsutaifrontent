import React from 'react'

const RectangleComponent5 = () => {
  return (
    <div className="w-[37.5rem] flex flex-row items-end justify-start pt-[1.19rem] px-[1.06rem] pb-[1.25rem] box-border relative gap-[1.25rem] max-w-full z-[1]">
    <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-16xl bg-gray-400" />
    <img
      className="h-[1.44rem] w-[1.19rem] relative object-cover min-h-[1.44rem] z-[1]"
      alt=""
      src="/icons8search50-1-1@2x.png"
    />
    <input
      className="w-[3.88rem] [border:none] [outline:none] font-light font-inter text-[1rem] bg-[transparent] h-[1.31rem] relative text-gray-500 text-left inline-block z-[1]"
      placeholder="Search..."
      type="text"
    />
  </div>
  )
}

export default RectangleComponent5