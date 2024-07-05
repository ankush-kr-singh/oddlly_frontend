import Navbar from "../../Navbar";
import Advantage from "./Advantage";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Advantage />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
