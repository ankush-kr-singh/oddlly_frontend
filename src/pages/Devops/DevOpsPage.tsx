import ProductDetailsCard from "./ProductDetailsCard";
import Sectons from "./Sectons";
import { DevopsHero, DevopsProductDetails } from "./data";
import Hero from "./Hero";
const DevOpsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero {...DevopsHero} />
      {/* Product Details */}
      <Sectons
        title="Devops Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {DevopsProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sectons>
    </>
  );
};

export default DevOpsPage;
