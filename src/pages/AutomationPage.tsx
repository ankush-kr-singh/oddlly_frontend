import { AutomationHero, AutomationProductDetails } from "../config/data";
import { HeroGeneral, ProductDetailsCard, Sections } from "../sections";

const AutomationPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroGeneral {...AutomationHero} />
      {/* Product Details */}
      <Sections
        title="Automation Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {AutomationProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sections>
    </>
  );
};

export default AutomationPage;
