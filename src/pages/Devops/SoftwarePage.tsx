import ProductDetailsCard from "./ProductDetailsCard";
import Sectons from "./Sectons";
import { SoftwareHero, SoftwareProductDetails } from "./data";
import Hero from "./Hero";
const SoftwarePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero {...SoftwareHero} />
      {/* Product Details */}
      <Sectons
        title="Software Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {SoftwareProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sectons>
    </>
  );
};

export default SoftwarePage;
