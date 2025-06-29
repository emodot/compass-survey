import Section1 from "components/ContactUs/Section1";
import Section2 from "components/ContactUs/Section2";
import SEO from "components/SEO";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO
        title="Contact Us - Compass Survey"
        description="Compass Survey Limited delivers topographic and offshore positioning services across Nigeria and Africa’s oil and gas industry. Backed by experienced personnel and advanced technology, we provide reliable, on-time solutions that consistently exceed client expectations."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1 />
      <Section2 />
    </>
  );
};

export default ContactUs;
