import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section2 = ({ header1, header2, text1, text2, image }) => {
  return (
    <div className="pt-[96px]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-redhawk lg:text-[32px] text-[24px] lg:leading-[14px] leading-[12px] lg:mb-8 mb-4"
        >
          {header1}
        </motion.h1>
        <motion.h1
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-redhawk lg:text-[32px] text-[24px] lg:leading-[14px] leading-[12px] mb-8"
        >
          {header2}
        </motion.h1>
        <div className="lg:flex justify-between items-center pt-4">
          <div className="basis-[42%]">
            <motion.img
              variants={fadeIn("", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-full"
              src={image}
              alt="hydrographic positioning survey"
            />
          </div>
          <div className="basis-[48%]">
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_r lg:text-[24px] text-[16px] lg:leading-[32px] leading-[24px] lg:mb-[2rem] mb-[1rem] lg:mt-0 mt-[1rem]"
            >
              {text1}
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px]"
            >
              {text2}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
