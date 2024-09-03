import { Link } from "react-router-dom";

// Footer component
const links = [
  { link: "/", title: "Home" },
  { link: "/devops", title: "Devops" },
  { link: "/security", title: "Security Services" },
  { link: "/software", title: "Software Service" },
  { link: "/automation", title: "IT Automation" },
];
const Footer = () => {
  return (
    <footer className="text-black relative min-h-[280px] pb-8 py-8 bg-neutral-9 bg-slate-100">
      <div className="w-[95%] max-w-maxScreen mx-auto flex flex-col gap-y-8">
        <div className="flex flex-col items-center md:items-start gap-x-24 gap-y-12 md:flex-row md:justify-around md:gap-0 my-6">
          {/* Logo and description */}
          <div className="flex flex-col items-center sm:items-start gap-y-3 px-4 text-center md:text-start">
            <a className="flex justify-center items-center gap-x-3" href="/">
              <img
                alt="Oddlly Logo"
                loading="lazy"
                width="150"
                src="/oddlly_name_s.svg"
              />
            </a>
            <p className="text-sm max-w-[300px] font-normal text-neutral-2">
              The Ultimate IT Solutions.
            </p>
          </div>
          {/* Quick Links section */}
          <div className="flex flex-col gap-y-3 text-center text-base md:text-left">
            <p className="font-medium text-center md:text-left">Quick Links</p>
            <div className="flex flex-col gap-y-2">
              {links.map((el, index) => (
                <Link to={el.link} key={index}>
                  <p className="text-sm font-normal text-shark-300 hover:text-indigo-500">
                    {el.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Get in touch section */}
          <div className="flex flex-col gap-y-3 text-center text-base md:text-left">
            <p className="font-medium text-center md:text-left">GET IN TOUCH</p>
            <div className="flex items-center gap-3 group">
              <p className="font-medium text-shark-300 group-hover:text-indigo-500">
                <a href="mailto:oddlly.techno@gmail.com">
                  oddlly.techno@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-neutral-9"></div>
        <div className="text-base text-center">
          Copyright © 2024 Oddlly Technologies Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
