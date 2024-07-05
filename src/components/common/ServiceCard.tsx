import { GlareCard } from "../ui/glare-card";

const ServiceCard = ({
  heading,
  para,
  link,
  linkText,
  className,
}: {
  heading: string;
  para: string;
  link: string;
  linkText: string;
  className?: string;
}) => {
  return (
    <>
      <GlareCard className={className}>
        <div className=" flex flex-col justify-evenly items-center h-full">
          <h2 className={`text-xl font-medium text-center`}>{heading}</h2>
          <p className="pt-4 px-4 text-gray-700 text-sm">{para}</p>
          <a
            href={link}
            className="duration-150 h-fit py-2 px-4  hover:bg-white/10 text-[#EF476F] rounded-full font-medium transition-colors border-[#EF476F] border flex gap-2"
          >
            {linkText}
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
      </GlareCard>
    </>
  );
};

export default ServiceCard;
