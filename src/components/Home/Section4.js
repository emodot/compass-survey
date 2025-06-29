// import { TypeAnimation } from "react-type-animation";
import Section4Img from "assets/images/home-sec-4.jpg";
import Button from "components/Inputs/Button";
import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
import { ReactComponent as DisabledNext } from "assets/icons/carousel-next-arrow-disabled.svg";
import { ReactComponent as DisabledPrev } from "assets/icons/carousel-prev-arrow-disabled.svg";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import Carousel from "react-multi-carousel";
import OffshoreProjects from "./OffshoreProjects";

const Section4 = () => {
  const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 1,
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
  
  const projects = [
    {
      title: "Offshore Pipeline Route Survey for Deepwater Installation",
      description:
        "Our team was contracted to provide comprehensive positioning and hydrographic survey services for a deepwater pipeline installation project in the Gulf of Guinea. The project required high-precision data to support route planning, risk assessment, and construction support.",
      image: Section4Img,
    },
    {
      title: "Offshore Pipeline Route Survey for Deepwater Installation",
      description:
        "Our team was contracted to provide comprehensive positioning and hydrographic survey services for a deepwater pipeline installation project in the Gulf of Guinea. The project required high-precision data to support route planning, risk assessment, and construction support.",
      image: Section4Img,
    },
    {
      title: "Offshore Pipeline Route Survey for Deepwater Installation",
      description:
        "Our team was contracted to provide comprehensive positioning and hydrographic survey services for a deepwater pipeline installation project in the Gulf of Guinea. The project required high-precision data to support route planning, risk assessment, and construction support.",
      image: Section4Img,
    },
  ];
  const onSlideChanged = ({ currentSlide, slidesToShow, totalItems }) => {
    // const totalItems = stepsMobile.length;
    // const lastSlideIndex = Math.ceil(totalItems / slidesToShow) - 1;
    // console.log(totalItems);
    // console.log(slidesToShow);
    // console.log(currentSlide);
    // console.log(lastSlideIndex);

    if (currentSlide + 1 === slidesToShow) {
      console.log("You are on the last slide!");
    }
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
          className={currentSlide === 5 ? "opacity-25" : ""}
          onClick={() => next()}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="bg-brand_secondary pb-[20rem]">
        <div className="max-w-[1300px] m-auto pt-[5rem] pb-[6rem] grid grid-cols-2">
          <div>
            <p className="text-[22px] font-obviously_m leading-[24px] mb-6">
              Our Projects
            </p>
            <h1 className="font-redhawk text-[45px] leading-[52px] text-brand_primary">
              Built on precision. <br />
              Backed by experience.
            </h1>
          </div>
          <div>
            <div className="flex flex-col items-end justify-end h-full">
              <Button name={"Learn More"} theme={"primary"} arrowIcon={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[-22rem]">
        <OffshoreProjects />
      </div>
    </div>
  );
};

export default Section4;
