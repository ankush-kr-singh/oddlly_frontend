import ServiceCard from "../components/common/ServiceCard";

const data = [
  {
    heading: `IT Automation and Networking`,
    para: `Transform your IT operations with our automation and networking
                solutions. We offer end-to-end services, from design to
                implementation.`,
    link: `/automation`,
    linkText: `Automation`,
    className: "",
  },
  {
    heading: `DevOps`,
    para: `We streamline your processes through continuous integration,
                continuous deployment, and infrastructure automation`,
    link: `/devops`,
    linkText: `DevOps`,
  },
  {
    heading: `Security Services`,
    para: `We offer comprehensive cybersecurity assessments, implementation
                of security measures, and continuous monitoring to keep your
                data safe.`,
    link: `/security`,
    linkText: `Security`,
  },
  {
    heading: `Software Services`,
    para: `From custom software development to application maintenance and
                support, we have the expertise to handle it all.
              `,
    link: `/software`,
    linkText: `Software`,
    className: ``,
  },
];
const Services = () => {
  return (
    <>
      <div
        id="services"
        className="mx-auto w-[95%] max-w-maxScreen text-black h-fit   my-10 flex flex-col items-center"
      >
        <h1 className="text-4xl font-semibold pb-16">What we offer</h1>
        <div className="flex-1 w-full grid gap-y-4 grid-cols-1 md:grid-cols-2 justify-items-center md:gap-y-8 lg:grid-cols-4 ">
          {data.map((el, index) => (
            <ServiceCard {...el} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
