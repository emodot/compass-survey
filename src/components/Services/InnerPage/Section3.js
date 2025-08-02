import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
// import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
import { ReactComponent as DisabledPrev } from "assets/icons/carousel-prev-arrow-disabled2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section3 = ({services}) => {
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
        <DisabledPrev
          className={currentSlide === 0 ? "opacity-25" : ""}
          onClick={() => previous()}
        />
        <ActiveNext
          className={currentSlide === 2 ? "opacity-25" : ""}
          onClick={() => next()}
        />
      </div>
    );
  };
  return (
    <div className="py-[96px]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto relative">
        <h1 className="font-redhawk lg:text-[32px] text-[24px] text-center">
          Key Service Features{" "}
        </h1>
        <div className="lg:block hidden mt-[4rem]">
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
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            rewind={true}
            rewindWithAnimation={true}
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
                  <p className="font-obviously_r text-[14px] leading-[24px] text-black mt-4">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="lg:hidden block mt-[2rem]">
          {services.map((item, index) => (
            <div className="mb-[2rem]" key={index}>
              <div
                className="h-[23rem]"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: item.imagePosition || "top",
                }}
              ></div>
              <div
                className={`px-[2rem] py-[3rem] ${
                  index % 2 === 0 ? "bg-[#97DBA2]" : "bg-[#F0F0F0]"
                }`}
              >
                <h1 className="font-obviously_m text-[18px] leading-[28px]">
                  {item.title}
                </h1>
                <p className="font-obviously_r text-[14px] leading-[24px] text-black mt-4">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
