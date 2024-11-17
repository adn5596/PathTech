import Aabout from "../Components/SecoundSection/Aabout";
import Partners from "../Components/Partners";
import Counter from "../Components/Counter/Counter";
import Hero from "../Components/Hero/Hero";
import SolutionsSection from "../Components/SolutionsSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import Slider1 from "../Components/Slider1/Slider1";
import Slider2 from "../Components/Slider2/Slider2";
import Tparticles from "../Components/Tparticles/Tparticles";
import DiscoverButton from "../Components/DiscoverButton/DiscoverButton";


const Home = () => {
  return (
    <div>
      {" "}
      <Slider1 />
      {/* <Hero /> */}
      <Aabout />
      <Counter />
      <SolutionsSection />
      {/* <DiscoverButton /> */}

      <ServicesSection />
      <Partners />
      {/* <Tparticles /> */}
    </div>
  );
};

export default Home;
