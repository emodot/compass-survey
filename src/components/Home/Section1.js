import Section1BG from "assets/images/home-sec-1-bg.webp";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section1 = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[13rem] pb-[6rem] grid lg:grid-cols-2 grid-cols-1">
        <div>
          <motion.h1
            className="font-redhawk text-[45px] lg:text-[50px] lg:leading-[64px] leading-[54px]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Innovating Survey Solutions for Africa
          </motion.h1>
        </div>
        <div className="lg:pl-[4rem]">
          <motion.p
            className="font-obviously_r text-14 leading-[24px] mb-6"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            We are your innovative, tech-native partner that delivers custom
            solutions using uncrewed survey vehicles and local engineering
            insight.
          </motion.p>
          <motion.div
            className="flex gap-4"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button
              name={"Discover More"}
              theme={"transparent"}
              arrowIcon={true}
              onClick={() => navigate("/about-us")}
            />
            <Button
              name={"Get in Touch"}
              theme={"secondary"}
              arrowIcon={true}
              onClick={() => navigate("/contact-us")}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="h-[35rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${Section1BG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        variants={fadeIn("", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
};

export default Section1;
