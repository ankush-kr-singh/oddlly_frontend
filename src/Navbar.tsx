const Navbar = () => {
  return (
    <>
      {/* wrapper */}
      <div
        className="bg-slate-100 p-1 py-2 z-10  fixed top-0 left-0 right-0 text-sm text-black font-inter backdrop-blur-sm"
        style={{ boxShadow: "0 4px 10px rgba(102, 116, 204, 0.25)" }}
      >
        {/* navbar */}
        <nav className=" w-[95%] max-w-maxScreen h-12 flex justify-between mx-auto items-center">
          {/* logo */}
          <a href="">
            <div className="font-light text-2xl">
              &lt; <span className="font-bold text-xl">Oddlly</span> /&gt;
            </div>
          </a>

          {/* menu */}
          <div
            className="hidden md:flex md:flex-1  h-full items-center gap-5"
            style={{ justifyContent: "flex-end" }}
          >
            <a
              href=""
              className="duration-150 text-center h-full hover:text-[#6674CC] transition-colors flex items-center font-semibold text-indigo-600"
            >
              Home
            </a>
            <a
              href=""
              className="duration-150 text-center h-full hover:text-[#6674CC] transition-colors flex items-center"
            >
              Services
            </a>
            <a
              href=""
              className="duration-150 text-center h-full hover:text-[#6674CC] transition-colors flex items-center"
            >
              About
            </a>
            <a
              href=""
              className="duration-150 text-center h-full hover:text-[#6674CC] transition-colors flex items-center"
            >
              Careers
            </a>

            <a
              href=""
              className="duration-150 h-fit py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium text-sm transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* mobile button */}
          <div className="hidden h-4 w-4 bg-slate-600"></div>
        </nav>

        {/* mobile navbar */}
        <div>
          {/* close button */}
          <div></div>

          {/* menu */}
          <ul></ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
