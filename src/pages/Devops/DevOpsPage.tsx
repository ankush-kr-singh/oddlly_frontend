import ProductDetailsCard from "./ProductDetailsCard";
import Sectons from "./Sectons";
import { productDetails } from "./data";
import DevopsHero from "./DevopsHero";
const DevOpsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <DevopsHero />
      {/* Product Details */}
      <Sectons
        title="Devops Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {productDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sectons>
    </>
  );
};

export default DevOpsPage;
