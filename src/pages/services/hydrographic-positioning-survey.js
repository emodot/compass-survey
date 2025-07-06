import Section1 from "components/Services/HydrographicPositioningSurvey/Section1";
import Section2 from "components/Services/HydrographicPositioningSurvey/Section2";
import Section3 from "components/Services/HydrographicPositioningSurvey/Section3";
import Section4 from "components/Services/HydrographicPositioningSurvey/Section4";
import BeforeFooter from "components/Services/BeforeFooter";
import SEO from "components/SEO";
import { useEffect } from "react";
import ClientsServed from "components/ClientsServed";

const HydrographicPositioningSurvey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Hydrographic & Positioning Survey - Compass Survey"
        description="Compass Survey Limited delivers topographic and offshore positioning services across Nigeria and Africa’s oil and gas industry. Backed by experienced personnel and advanced technology, we provide reliable, on-time solutions that consistently exceed client expectations."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <ClientsServed />
      <BeforeFooter />
    </>
  );
};

export default HydrographicPositioningSurvey;
