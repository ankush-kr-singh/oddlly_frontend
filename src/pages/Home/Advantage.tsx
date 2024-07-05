import { Meteors } from "@/components/ui/meteors";

const Advantage = () => {
  return (
    <>
      <div className="mx-auto py-20 w-[95%] max-w-maxScreen text-black/80 h-fit  flex flex-col  justify-center items-center">
        <div className="text-center pb-6">
          <h2 className="font-semibold text-4xl pb-2">
            Oddlly Technologies: Your Competitive Edge
          </h2>
          <p className="">
            Explore the unique benefits that set Oddlly apart, giving you the
            competitive edge in your bussiness endeavors.
          </p>
        </div>
        {/* block */}
        <div className="w-fit relative text-black">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-300 to-teal-300 transform scale-x-[0.9] scale-y-[0.8] bg-red-300  blur-21xl" />
          <div className="relative shadow-xl bg-slate-100 border border-gray-800  px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-center lg:flex-row">
            {/* advanatge */}
            <div className="flex-1  flex flex-col justify-evenly gap-4">
              <div className="flex gap-2 text-lg items-center">
                Cutting Edge Technology
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-green-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex gap-2 text-lg items-center">
                Fastest Development Time
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-green-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex gap-2 text-lg items-center">
                24x7 Bussiness Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-green-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex gap-2 text-lg items-center">
                Security at it's best
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-green-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* image */}

            <div className="p-10 flex-1">
              <img src="/graph.png" alt="" />
            </div>
            <Meteors number={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantage;
