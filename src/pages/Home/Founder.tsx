// Main component
const Founder = () => {
  return (
    <>
      <div className="-mb-40 mx-auto w-[95%] max-w-maxScreen text-white pt-10 h-fit">
        <div className="text-center">
          <h2 className="text-3xl font-bold pb-4">Who we are ?</h2>
          <p className="pb-8">
            Discover cutting edge tech Solutions with our expert engineers.
            Passionate engineers dedicated to make your bussiness ease on oddlly
            technology.
          </p>
        </div>
        <div className="relative h-fit overflow-hidden bg-[#16171c] rounded-3xl ">
          <div className="flex h-full flex-col md:flex-row items-ce">
            {/* Background circles */}
            <div className="w-[16rem] h-[16rem] sm:w-[31.625rem] sm:h-[31.625rem] flex-shrink-0 rounded-full bg-indigo-700 absolute top-[80px] left-[30px] sm:top-[140px]  sm:left-[40px] " />
            <div className="w-[13rem] h-[13rem] sm:w-[28.625rem] sm:h-[28.625rem] flex-shrink-0 rounded-full border border-indigo-500 absolute top-[100px] sm:top-[180px] left-[60px]" />
            <div className="w-[18rem] h-[18rem] sm:w-[35.75rem] sm:h-[35.75rem] flex-shrink-0 rounded-full border border-indigo-500 absolute top-[50px] sm:top-[90px] sm:left-[15px] left-[14px]" />
            <img
              loading="lazy"
              width="180"
              height="200"
              src="/PlusFrame.svg"
              className="z-10 bottom-0 absolute"
            />
            {/* Image */}
            <div className="flex-1 flex justify-center ml-15">
              <img
                loading="lazy"
                width="460"
                height="460"
                src="/about.jpg"
                className="z-20"
              />
            </div>
            {/* Text content */}
            <div className="z-40 w-full flex flex-col gap-8 flex-1 justify-center lg:pr-10">
              <div className="w-full flex flex-col items-start gap-y-6 self-stretch">
                <div className="text-center md:text-left w-full">
                  <p className=" text-white font-semibold text-3xl">
                    Oddly Technologies Pvt. Ltd.
                  </p>
                </div>
                <div className="text-gray-200">
                  <p className="hidden lg:block">
                    CyZen is a pioneering technology company dedicated to
                    empowering businesses with cutting-edge solutions, driving
                    innovation and transformation in the modern digital
                    landscape <br />
                    Modern organizations recognize Technology as a pivotal
                    differentiator and core competency. We wholeheartedly
                    embrace this belief, propelling us to seamlessly translate
                    our customers' business needs into vibrant reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
