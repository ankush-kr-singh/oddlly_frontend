import Navbar from "@/Navbar";
import Hero from "@/pages/Home/Hero";
import Services from "@/pages/Home/Services";
import Advantage from "@/pages/Home/Advantage";
import Contacts from "@/pages/Home/Contacts";
import Footer from "@/pages/Home/Footer";

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
