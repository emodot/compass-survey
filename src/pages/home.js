import Section1 from "components/Home/Section1";
// import HeroSection from "components/Home/HeroSection";
import Section2 from "components/Home/Section2";
import Section3 from "components/Home/Section3";
// import Section4 from "components/Home/Section4";
// import Section5 from "components/Home/Section5";
// import Section6 from "components/Home/Section6";
import SEO from "../components/SEO";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Compass Survey - Innovating Survey Solutions for Africa"
        description="We are your innovative, tech-native partner that delivers custom solutions using uncrewed survey vehicles and local engineering insight."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 />
      <Section5 />
      <Section6 /> */}
    </>
  );
};

export default Home;
