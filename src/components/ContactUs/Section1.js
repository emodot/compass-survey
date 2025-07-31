import Section1BG from "assets/images/contact-sec-1-bg.webp";
import Section1MobileBG from "assets/images/contact-sec-1-mobile-bg.webp";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section1 = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:pt-[13rem] pt-[10rem] pb-[4rem]">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-redhawk lg:text-[45px] text-[32px] leading-[52px] lg:w-[60%] w-full mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-obviously_r lg:text-14 text-[12px] leading-[24px] lg:w-[70%] w-full"
          >
            With extensive years of experience, we are ready to deliver great
            results for services in  topographical surveys services, offshore
            pre-engineering positioning and site surveys, high resolution marine
            geophysical site surveys, and geotechnical site investigations to
            our clients in Nigeria and the entire African Region.
          </motion.p>
          {/* <img src={Section1BG} alt="people in a meeting" className="" /> */}
        </div>
      </div>
      <motion.div
        variants={fadeIn("", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:h-[25rem] h-[15rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${isMobile ? Section1MobileBG : Section1BG})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
    </div>
  );
};

export default Section1;
