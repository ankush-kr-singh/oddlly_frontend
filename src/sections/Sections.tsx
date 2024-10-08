import { SectionProps } from "../config/app";

const Sections = ({ title, className, titleStyle, children }: SectionProps) => {
  return (
    <div className={` w-[90%] max-w-[1200px] mx-auto ${className}`}>
      {title && <h1 className={`${titleStyle}`}>{title}</h1>}
      {children}
    </div>
  );
};

export default Sections;
