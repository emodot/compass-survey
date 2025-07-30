import Section1 from "components/Services/InnerPage/Section1";
import Section2 from "components/Services/InnerPage/Section2";
import Section3 from "components/Services/InnerPage/Section3";
import Section4 from "components/Services/InnerPage/Section4";
import BeforeFooter from "components/Services/BeforeFooter";
import SEO from "components/SEO";
import { useEffect } from "react";
import ClientsServed from "components/ClientsServed";
import Section1BG from "assets/images/services/hydrographic-sec-1-bg.webp";
import Section2BG from "assets/images/services/hydrographic-sec-2-bg.webp";
import ServicesFeature1 from "assets/images/services/hydrographic-service-feat-1-bg.webp";
import ServicesFeature2 from "assets/images/services/hydrographic-service-feat-2-bg.webp";
import ServicesFeature3 from "assets/images/services/hydrographic-service-feat-3-bg.webp";
import ServicesFeature4 from "assets/images/services/hydrographic-service-feat-4-bg.webp";

const HydrographicPositioningSurvey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Uncrewed Survey Vehicles (USVs)",
      text: "Enabling safe, efficient data acquisition in shallow, narrow, or high-risk waters, minimizing human exposure.",
      image: ServicesFeature1,
    },
    {
      title: "Multibeam & Single-Beam Echo Sounding",
      text: "Capturing high-precision depth profiles and bathymetric maps for infrastructure development, dredging, and habitat analysis.",
      image: ServicesFeature2,
    },
    {
      title: "Real-Time GNSS & RTK Positioning",
      text: "Delivering accurate location data to support offshore structures, vessels, or construction equipment.",
      image: ServicesFeature3,
    },
    {
      title: "Tidal and Current Monitoring",
      text: "Monitoring marine dynamics for operational safety, environmental studies, and project planning.",
      image: ServicesFeature4,
    },
  ];

  const process = [
    {
      num: "01",
      title: "Project Consultation & Scope Definition",
      text: "We engage clients to understand survey objectives, operational constraints, and desired outcomes. This helps define the right tools, approach, and timelines for optimal execution.",
    },
    {
      num: "02",
      title: "USV Deployment & Data Acquisition",
      text: "We mobilize uncrewed survey vehicles equipped with sonar and GNSS systems to collect precise hydrographic and positioning data—even in shallow or high-risk zones.",
    },
    {
      num: "03",
      title: "Real-Time Monitoring & Adjustments",
      text: "Our team continuously monitors the data feed, adjusting survey routes and parameters in real-time for full coverage and minimal downtime.",
    },
    {
      num: "04",
      title: "Data Processing & Reporting",
      text: "Post-survey, we process and quality-check all data, delivering bathymetric charts, position logs, and reports in client-ready formats.",
    },
  ];

  return (
    <>
      <SEO
        title="Hydrographic & Positioning Survey - Compass Survey"
        description="Delivering accurate bathymetric and real-time positioning data, even in the most challenging marine environments. Our USV-powered surveys enhance safety, reduce costs, and provide reliable data for critical offshore operations."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1
        title="Hydrographic & Positioning Survey"
        text="Delivering accurate bathymetric and real-time positioning data, even in the most challenging marine environments. Our USV-powered surveys enhance safety, reduce costs, and provide reliable data for critical offshore operations."
        image={Section1BG}
      />
      <Section2
        header1="Built for depth."
        header2="Designed for precision."
        text1="Our hydrographic and positioning surveys provide high-resolution depth and spatial data to support marine construction, navigation, cable routing, dredging, and offshore energy projects."
        text2="By using uncrewed survey vehicles and real-time GNSS technology, we operate in areas traditional vessels can’t reach, while improving safety and operational efficiency. Whether in ports or open waters, we deliver data that meets international standards and is tailored to the unique terrain of African coastlines."
        image={Section2BG}
      />
      <Section3 services={services} />
      <Section4 process={process} />
      <ClientsServed />
      <BeforeFooter />
    </>
  );
};

export default HydrographicPositioningSurvey;
