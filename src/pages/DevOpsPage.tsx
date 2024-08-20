import { DevopsHero, DevopsProductDetails } from "../config/data";
import { ProductDetailsCard, HeroGeneral, Sections } from "../sections";
const DevOpsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroGeneral {...DevopsHero} />
      {/* Product Details */}
      <Sections
        title="Devops Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {DevopsProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sections>
    </>
  );
};

export default DevOpsPage;
