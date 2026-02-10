import ZakHero from "../component/sec1";
import ProductShowcase from "../component/sec2";
import CategoryCatalog from "../component/sec3";
import HeroSection from "../component/sec4";
import ZakNews from "../component/sec5";

const Home = () => {
  return (
    <>
      <ZakHero />
      <ProductShowcase />
      <CategoryCatalog />
      <HeroSection />
      <ZakNews />
    </>
  );
};

export default Home;
