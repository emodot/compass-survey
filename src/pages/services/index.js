import Section1 from "components/Services/Section1";
import Section2 from "components/Services/Section2";
import Section3 from "components/Home/Section3";
import BeforeFooter from "components/Services/BeforeFooter";
import SEO from "components/SEO";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Services - Compass Survey"
        description="Compass Survey Limited delivers topographic and offshore positioning services across Nigeria and Africa’s oil and gas industry. Backed by experienced personnel and advanced technology, we provide reliable, on-time solutions that consistently exceed client expectations."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <BeforeFooter />
    </>
  );
};

export default Services;
