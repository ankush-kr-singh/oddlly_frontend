import Hero from "./Hero";
import ProductDetailsCard from "./ProductDetailsCard";
import Sectons from "./Sectons";
import { SecurityHero, SecurityProductDetails } from "./data";
const SecurityPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero {...SecurityHero} />
      {/* Product Details */}
      <Sectons
        title="Security Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {SecurityProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sectons>
    </>
  );
};

export default SecurityPage;
