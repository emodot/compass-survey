import Button from "components/Inputs/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services1 from "assets/images/services/services-1.webp";
import Services2 from "assets/images/services/services-2.webp";
import Services3 from "assets/images/services/services-3.webp";

// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const BeforeFooter = () => {
  const carouselImages = [
    Services1,
    Services2,
    Services3,
  ];
  return (
    <div className="relative h-[400px]">
      <div className="grid grid-cols-2 h-full">
        <div className="bg-brand_primary">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable={true}
          >
            {carouselImages.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "25rem",
                  width: "100%",
                }}
              ></div>
            ))}
          </Carousel>
        </div>
        <div className="bg-brand_primary text-white px-6 py-16"></div>
      </div>
      <div className="max-w-[1300px] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
        <div className="pr-[4rem]"></div>
        <div className="pl-[6rem]">
          <p className="font-obviously_m text-[22px] leading-[32px] w-[60%] mb-[4rem] text-white">
            Ready to experience our services in action? Get in Touch with our
            experts today.
          </p>
          <Button name={"Contact Us"} theme={"secondary"} arrowIcon={true} />
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
