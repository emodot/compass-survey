import { ReactComponent as ActiveNext } from "assets/icons/carousel-next-arrow-active.svg";
import { ReactComponent as ActivePrev } from "assets/icons/carousel-prev-arrow-active.svg";
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
                  <p className="font-obviously_r text-[14px] leading-[24px] text-black mt-4">
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
