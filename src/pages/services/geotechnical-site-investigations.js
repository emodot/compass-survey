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
import ServicesFeature1 from "assets/images/services/service-feature-1.jpg";
import ServicesFeature2 from "assets/images/services/service-feature-2.jpg";

const GeotechnicalSiteInvestigations = () => {
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
        image: ServicesFeature1,
      },
      {
        title: "Tidal and Current Monitoring",
        text: "Monitoring marine dynamics for operational safety, environmental studies, and project planning.",
        image: ServicesFeature2,
      },
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
        image: ServicesFeature1,
      },
      {
        title: "Seabed Classification & Interpretation",
        text: "Provides detailed terrain modeling for infrastructure siting, habitat assessment, and geohazard mitigation.",
        image: ServicesFeature2,
      },
      {
        title: "Cone Penetration Testing (CPT)",
        text: "Real-time profiling of soil resistance and stratigraphy, ideal for offshore and nearshore foundation design.",
        image: ServicesFeature1,
      },
      {
        title: "Borehole Sampling & Lab Testing",
        text: "Collection and analysis of soil cores for determining strength, composition, and compressibility.",
        image: ServicesFeature2,
      },
      {
        title: "Geotechnical Reporting & Interpretation",
        text: "Actionable reports with soil models, risk zones, and foundation design parameters.",
        image: ServicesFeature1,
      },
      {
        title: "Integration with Geophysical & Hydrographic Data",
        text: "Holistic understanding of ground and seabed conditions through multi-layered data integration.",
        image: ServicesFeature2,
      },
    ];

    const process = [
      {
        num: "01",
        title: "Site Desktop Study & Planning",
        text: "We begin with desk-based research to assess site geology and define the most suitable investigation techniques and sampling locations.",
      },
      {
        num: "02",
        title: "On-Site CPTs, Boreholes & Sampling",
        text: "Field teams carry out cone penetration testing and borehole drilling using mobile or marine rigs—collecting vital in-situ soil data.",
      },
      {
        num: "03",
        title: "Laboratory Analysis & Soil Testing",
        text: "Collected samples are sent to certified labs for geomechanical testing, sediment classification, and strength analysis.",
      },
      {
        num: "04",
        title: "Reporting & Engineering Recommendations",
        text: "We deliver comprehensive geotechnical reports, foundation design inputs, and risk insights tailored to your project's needs.",
      },
    ];
  return (
    <>
      <SEO
        title="Geotechnical Site Investigations - Compass Survey"
        description="Our geotechnical services offer insight into the strength, structure, and stability of seabed soils—reducing risk, delays, and design errors."
        name="Compass Survey - Innovating Survey Solutions for Africa"
        type="website"
      />
      <Section1
        title="Geotechnical Site Investigations"
        text="Our geotechnical services offer insight into the strength, structure, and stability of seabed soils—reducing risk, delays, and design errors."
        image={Section1BG}
      />
      <Section2
        header1="Build on confidence."
        header2="Grounded in data."
        text1="Compass Survey’s geotechnical site investigations provide critical data on soil composition and strength for the safe design of offshore and coastal structures."
        text2="Through methods such as cone penetration testing (CPT), borehole sampling, and lab analysis, we identify ground risks early—helping engineers design better, build faster, and prevent costly failures. Our local knowledge, combined with advanced equipment, makes us a reliable partner for infrastructure projects across the region."
        image={Section2BG}
      />
      <Section3 services={services} />
      <Section4 process={process} />
      <ClientsServed />
      <BeforeFooter />
    </>
  );
};

export default GeotechnicalSiteInvestigations;
