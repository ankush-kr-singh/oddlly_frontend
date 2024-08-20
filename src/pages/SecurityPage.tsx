import { SecurityHero, SecurityProductDetails } from "../config/data";
import { HeroGeneral, ProductDetailsCard, Sections } from "../sections";
const SecurityPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroGeneral {...SecurityHero} />
      {/* Product Details */}
      <Sections
        title="Security Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {SecurityProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sections>
    </>
  );
};

export default SecurityPage;
