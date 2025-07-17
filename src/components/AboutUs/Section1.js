import Section1BG from "assets/images/about-sec-1-bg.webp";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:pt-[13rem] pt-[11rem] lg:pb-[6rem] pb-[4rem]">
        <div>
          <motion.h1
            className="font-redhawk lg:text-[45px] text-[32px] lg:leading-[52px] leading-[40px] xl:w-[60%] lg:w-[80%] w-full lg:mb-6 mb-4"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            We lead with technology, but we build with understanding.
          </motion.h1>
          <motion.p
            className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px] mb-6 lg:w-[80%] w-full"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            We stand at the forefront of Nigeria’s survey industry, pioneering
            the integration of uncrewed survey technologies and innovative
            solutions to deliver unmatched precision and efficiency in oil and
            gas exploration and development.
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={fadeIn("", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:h-[35rem] h-[25rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${Section1BG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
    </div>
  );
};

export default Section1;
