import SpinButton from "../../components/ui/Buttons/spin-button";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="mx-auto w-[95%] max-w-maxScreen  h-screen pt-[4rem] flex flex-col lg:flex-row"
      >
        {/* left */}
        <div className="flex-1 flex flex-col mt-8 gap-4 items-center justify-center">
          <h1 className="text-gray-900 text-center lg:text-left text-3xl sm:text-[2.5rem] font-semibold w-full leading-[1.25]">
            Boost Your Business <br /> with Advanced <br /> Tech Solutions
          </h1>
          <p className="text-gray-700 text-base text-center lg:text-left font-normal w-full">
            Enhance your business with our tech solutions: <br />
            custom software, IT automation, DevOps, and security services.
          </p>

          {/* buttons */}
          <div className="flex flex-col lg:flex-row gap-8 w-full items-center">
            <a
              href=""
              className="duration-150 h-fit py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
            >
              Contact Us
            </a>

            <a
              href=""
              className="duration-150 h-fit py-2 px-4  hover:bg-white/10 text-[#EF476F] rounded-full font-medium transition-colors border-[#EF476F] border flex gap-2"
            >
              View Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-[#EF476F]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 hidden lg:flex flex-col items-end justify-center gap-8">
          <SpinButton>IT Automation</SpinButton>
          <SpinButton>Software Development</SpinButton>
          <SpinButton>DevOps</SpinButton>
          <SpinButton>Security Services</SpinButton>
        </div>
      </div>
    </>
  );
};

export default Hero;
