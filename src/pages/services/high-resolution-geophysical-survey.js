import Section1 from "components/Services/InnerPage/Section1";
import Section2 from "components/Services/InnerPage/Section2";
import Section3 from "components/Services/InnerPage/Section3";
import Section4 from "components/Services/InnerPage/Section4";
import BeforeFooter from "components/Services/BeforeFooter";
import SEO from "components/SEO";
import { useEffect } from "react";
import ClientsServed from "components/ClientsServed";
import Section1BG from "assets/images/services/high-resolution-sec-1-bg.webp";
import Section1MobileBG from "assets/images/services/high-resolution-sec-1-mobile-bg.webp";
import Section2BG from "assets/images/services/high-resolution-sec-2-bg.webp";
import ServicesFeature1 from "assets/images/services/high-resolution-service-feat-1-bg.webp";
import ServicesFeature2 from "assets/images/services/high-resolution-service-feat-2-bg.webp";
import ServicesFeature3 from "assets/images/services/high-resolution-service-feat-3-bg.webp";
import ServicesFeature4 from "assets/images/services/high-resolution-service-feat-4-bg.webp";

const HighResolutionGeophysicalSurvey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Side-Scan Sonar Imaging",
      text: "Generates high-resolution images of the seabed to identify obstructions, objects, and surface features critical to construction and safety.",
      image: ServicesFeature1,
    },
    {
      title: "Sub-Bottom Profiling",
      text: "Reveals buried layers and sediments beneath the seabed—key for foundation design, dredging, and route feasibility.",
      image: ServicesFeature2,
    },
    {
      title: "Magnetometer Surveys",
      text: "Detects ferrous objects and potential UXOs—ensuring safe excavation and installation.",
      image: ServicesFeature3,
    },
    {
      title: "Seabed Classification & Interpretation",
      text: "Provides detailed terrain modeling for infrastructure siting, habitat assessment, and geohazard mitigation.",
      image: ServicesFeature4,
    },
  ];

  const process = [
    {
      num: "01",
      title: "Survey Planning & Sensor Integration",
      text: "We analyze project requirements to determine the best mix of geophysical sensors—ensuring accurate seabed and subsurface imaging.",
    },
    {
      num: "02",
      title: "USV/Vessel Navigation & Data Collection",
      text: "Survey vehicles equipped with sonar, profilers, and magnetometers follow pre-programmed tracks to collect high-resolution seabed data.",
    },
    {
      num: "03",
      title: "Data Interpretation & Geohazard Assessment",
      text: "Our experts interpret sonar images and sub-bottom profiles to identify hazards, classify sediments, and highlight risk zones.",
    },
    {
      num: "04",
      title: "Mapping & Advisory Reporting",
      text: "We generate terrain models, annotated charts, and risk reports to support design, routing, and permitting decisions.",
    },
  ];

  return (
    <>
      <SEO
        title="High Resolution Geophysical Survey - Compass Survey"
        description="Our high-resolution geophysical surveys offer full visibility into seabed and sub-seafloor conditions—supporting safer infrastructure, better design, and smarter decisions."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1
        title="High Resolution Geophysical Survey"
        text="We map the unseen. Our high-resolution geophysical surveys offer full visibility into seabed and sub-seafloor conditions—supporting safer infrastructure, better design, and smarter decisions."
        image={Section1BG}
        imageMobile={Section1MobileBG}
      />
      <Section2
        header1="Clarity Below the Surface."
        header2="Intelligence You Can Build On."
        text1="Compass Survey delivers comprehensive geophysical surveys that analyze the physical characteristics of the seabed and underlying layers. These surveys support engineering design, hazard identification, and route planning for cables, pipelines, offshore structures, and environmental projects."
        text2="High Resolution Geophysical Survey involves the measurement and mapping of features beneath the water's surface. By combining advanced hydroacoustic sensors and high-precision positioning tools, we provide essential geospatial intelligence for maritime and offshore operations."
        image={Section2BG}
      />
      <Section3 services={services} />
      <Section4 process={process} />
      <ClientsServed />
      <BeforeFooter />
    </>
  );
};

export default HighResolutionGeophysicalSurvey;
