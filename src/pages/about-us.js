import Section1 from "components/AboutUs/Section1";
import Section2 from "components/AboutUs/Section2";
import SEO from "components/SEO";
import { useEffect } from "react";
import BeforeFooter from "components/BeforeFooter";
import OurTeam from "components/AboutUs/OurTeams.js";
import ClientsServed from "components/ClientsServed";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="About Us - Compass Survey"
        description="Compass Survey Limited delivers topographic and offshore positioning services across Nigeria and Africa’s oil and gas industry. Backed by experienced personnel and advanced technology, we provide reliable, on-time solutions that consistently exceed client expectations."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1 />
      <Section2 />
      <ClientsServed />
      <OurTeam />
      <BeforeFooter />
    </>
  );
};

export default AboutUs;
