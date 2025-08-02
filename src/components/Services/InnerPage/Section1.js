import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section1 = ({ title, text, image, imageMobile }) => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[13rem] pb-[96px]">
        <div>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-redhawk lg:text-[45px] text-[32px] lg:leading-[52px] leading-[40px] lg:w-[80%] w-full mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-obviously_r lg:text-14 text-[12px] leading-[24px] lg:w-[80%] w-full"
          >
            {text}
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={fadeIn("", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:h-[35rem] h-[20rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${isMobile ? imageMobile : image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></motion.div>
    </div>
  );
};

export default Section1;
