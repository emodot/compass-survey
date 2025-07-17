import Section1BG from "assets/images/services-sec-1-bg.webp";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:pt-[13rem] pt-[11rem]">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-redhawk lg:text-[45px] text-[32px] leading-[52px] lg:w-[60%] w-full lg:mb-6 mb-3"
          >
            What we do
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px] mb-[5rem] lg:w-[80%] w-full"
          >
            With deep roots in the oil and gas sector and a vision to transform
            the industry through technology and local talent, we blend deep
            technical know-how with localized insight to solve our clients’ most
            pressing challenges—especially in shallow water environments.
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
