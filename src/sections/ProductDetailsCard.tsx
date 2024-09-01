import { ProductDetailsCardProps } from "../config/app";

const ProductDetailsCard = ({
  bg_img_url,
  img_title,
  points,
  title,
  alignment,
}: ProductDetailsCardProps) => {
  const flexRow = alignment === "RIGHT" ? "md:flex-row-reverse" : "";
  const textEnd = alignment === "RIGHT" ? "md:text-end" : "";
  return (
    <>
      <div
        className={`drop-shadow-md overflow-hidden  bg-slate-50 rounded-md flex gap-5 ${flexRow} `}
      >
        {/* image */}
        <div className={`flex-[3] relative drop-shadow-xl hidden md:block `}>
          <img src={bg_img_url} className="absolute h-full w-full opacity-75" />
          <p className="absolute bg-black/40 h-full w-full text-lg font-semibold text-white drop flex justify-center items-center">
            {img_title}
          </p>
        </div>
        {/* details */}
        <div className={`flex-[7] p-3`}>
          <h2 className={`text-2xl font-thin pb-3 ${textEnd}`}>{title}</h2>
          <ul className="flex flex-col gap-3">
            {points.map((point, index) => (
              <li key={index} className={`${textEnd}`}>
                <h3 className="text-lg text-gray-800">{point.key}</h3>
                <p className="text-sm text-gray-700">{point.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
