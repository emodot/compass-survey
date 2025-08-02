import Button from "components/Inputs/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel1 from "assets/images/contact-sec-1-mobile-bg.webp";
import Carousel2 from "assets/images/services/carousel-image-2.webp";
import Carousel3 from "assets/images/services/carousel-image-3.webp";
import CarouselMobile2 from "assets/images/services/carousel-image-mobile-2.jpg";
import CarouselMobile3 from "assets/images/services/carousel-image-mobile-3.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const BeforeFooter = () => {
  const isMobile = window.innerWidth < 768;
  const carouselImages = [
    Carousel1,
    Carousel2,
    Carousel3,
  ];
  const carouselMobileImages = [
    Carousel1,
    CarouselMobile2,
    CarouselMobile3,
  ];
  return (
    <div className="relative lg:h-[400px]">
      <div className="lg:grid grid-cols-2 h-full">
        <div className="bg-brand_primary">
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            // containerClass="container"
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
            {isMobile ? carouselMobileImages.map((item, index) => (
              <div
                key={index}
                className="w-full lg:h-[25rem] h-[20rem]"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            )) : carouselImages.map((item, index) => (
              <div
                key={index}
                className="w-full lg:h-[25rem] h-[20rem]"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ))}
          </Carousel>
        </div>
        <div className="lg:block hidden bg-brand_primary"></div>
        <div className="lg:hidden block bg-brand_primary text-white px-6 py-16">
          <div className="pl-[1.5rem]">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_m text-[22px] leading-[32px] xl:w-[60%] lg:w-[80%] w-[90%] mb-[4rem] text-white"
            >
              Ready to experience our services in action? Get in Touch with our
              experts today.
            </motion.p>
            <Button name={"Contact Us"} theme={"secondary"} arrowIcon={true} />
          </div>
        </div>
      </div>
      <div className="lg:grid hidden max-w-[1300px] m-auto py-[5rem] grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
        <div className="pr-[4rem]"></div>
        <div className="xl:pl-[6rem] lg:pl-[4rem] pl-[2rem]">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-obviously_m text-[22px] leading-[32px] xl:w-[60%] lg:w-[80%] w-[90%] mb-[4rem] text-white"
          >
            Ready to experience our services in action? Get in Touch with our
            experts today.
          </motion.p>
          <Button
            name={"Contact Us"}
            theme={"secondary"}
            arrowIcon={true}
            className="border border-brand_secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
