import ServicesFeature1 from "assets/images/services/service-feature-1.jpg";
import ServicesFeature2 from "assets/images/services/service-feature-2.jpg";
import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section3 = () => {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomButtonGroupAsArrows = ({
    next,
    previous,
    goToSlide,
    ...rest
  }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="absolute top-[1rem] right-[1rem] flex space-x-1">
        <ActivePrev
          className={currentSlide === 0 ? "opacity-25" : ""}
          onClick={() => previous()}
        />
        <ActiveNext
          className={currentSlide === 11 ? "opacity-25" : ""}
          onClick={() => next()}
        />
      </div>
    );
  };
  return (
    <div className="pb-[8rem]">
      <div className="max-w-[1300px] m-auto relative">
        <h1 className="font-redhawk text-[32px] text-center">
          Key Service Features{" "}
        </h1>
        <div className="mt-[4rem]">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="container-padding-bottom"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            dotListClass="text-brand_primary"
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {services.map((item, index) => (
              <div className="grid grid-cols-2 mx-[1rem]" key={index}>
                <div
                  className="h-[23rem]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className={`px-[2rem] pt-[4rem] ${
                    index % 2 === 0 ? "bg-[#97DBA2]" : "bg-[#F0F0F0]"
                  }`}
                >
                  <h1 className="font-obviously_m text-[18px] leading-[28px]">
                    {item.title}
                  </h1>
                  <p className="font-obviously_r text-[14px] leading-[24px] text-[#6E6E6E] mt-4">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section3;
