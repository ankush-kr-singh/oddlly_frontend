import ProductDetailsCard from "./ProductDetailsCard";
import Sectons from "./Sectons";
import { AutomationHero, AutomationProductDetails } from "./data";
import Hero from "./Hero";
const AutomationPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero {...AutomationHero} />
      {/* Product Details */}
      <Sectons
        title="Automation Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {AutomationProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sectons>
    </>
  );
};

export default AutomationPage;
