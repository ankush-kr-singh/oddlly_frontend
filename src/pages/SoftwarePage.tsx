import { SoftwareHero, SoftwareProductDetails } from "../config/data";
import { HeroGeneral, ProductDetailsCard, Sections } from "../sections";

const SoftwarePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroGeneral {...SoftwareHero} />
      {/* Product Details */}
      <Sections
        title="Software Products"
        className={`flex flex-col gap-10 `}
        titleStyle={`text-center text-3xl underline pb-6 text-gray-600`}
      >
        {SoftwareProductDetails.map((product, index) => (
          <ProductDetailsCard {...product} key={index} />
        ))}
      </Sections>
    </>
  );
};

export default SoftwarePage;
