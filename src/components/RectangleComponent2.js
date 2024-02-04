import React, { useMemo } from 'react'

const RectangleComponent2 = ({
    rectangle29,
    icons8Favorite241,
    ellipse1,
    icons8Like301,
    icons8Comment501,
    propAlignSelf,
  }) =>{
  const rectangleDivStyle= useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);
  return (
    <div
      className="self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[1.19rem] box-border relative gap-[1.06rem] max-w-full z-[1] text-left text-[2rem] text-white font-inter"
      style={rectangleDivStyle}
    >
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-31xl bg-gray-700" />
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[18.63rem] flex-1 relative rounded-31xl max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src={rectangle29}
        />
        <img
          className="h-[1.13rem] w-[1.38rem] absolute my-0 mx-[!important] top-[1.69rem] right-[1.75rem] object-cover z-[2]"
          alt=""
          src={icons8Favorite241}
        />
      </div>
      <div className="w-[26rem] flex flex-row items-start justify-start py-[0rem] pr-[1.63rem] pl-[1.25rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[0.5rem] max-w-full">
          <h1 className="m-0 w-[11.63rem] h-[2.94rem] relative text-inherit capitalize font-bold font-inherit inline-block shrink-0 z-[1] mq825:text-[1.63rem] mq450:text-[1.19rem]">
            HEADING
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.56rem] min-h-[9.81rem] text-[1rem] text-silver">
            <h3 className="m-0 self-stretch h-[7.31rem] relative text-inherit capitalize font-normal font-inherit inline-block shrink-0 z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor `}</h3>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.44rem] text-[0.69rem] text-white">
              <div className="flex flex-row items-start justify-start relative">
                <div className="h-[1.5rem] w-[4.69rem] absolute my-0 mx-[!important] top-[-0.31rem] left-[calc(50%_-_36.5px)] rounded-16xl bg-royalblue z-[1]" />
                <div className="relative capitalize font-extralight z-[2]">
                  Read more
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.38rem] box-border max-w-full text-[0.69rem]">
            <div className="flex-1 flex flex-row items-center justify-between gap-[1.25rem] max-w-full mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[0.31rem]">
                <img
                  className="h-[1.56rem] w-[1.63rem] relative rounded-[50%] object-cover z-[1]"
                  alt=""
                  src={ellipse1}
                />
                <div className="relative capitalize font-extralight z-[1]">
                  author Name
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1.19rem]">
                <div className="flex flex-row items-start justify-start gap-[0.69rem]">
                  <img
                    className="h-[1.13rem] w-[0.94rem] relative object-cover z-[1]"
                    alt=""
                    src={icons8Like301}
                  />
                  <div className="flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
                    <div className="relative capitalize font-extralight z-[1]">
                      1.9k
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.38rem]">
                  <img
                    className="h-[1.19rem] w-[1.06rem] relative object-cover z-[1]"
                    alt=""
                    src={icons8Comment501}
                  />
                  <div className="relative capitalize font-extralight z-[1]">
                    229
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RectangleComponent2