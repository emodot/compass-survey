import "react-multi-carousel/lib/styles.css";
import Mission from "assets/images/about-sec-3a.webp";
import Vision from "assets/images/about-sec-3b.webp";
import { ReactComponent as MissionIcon } from "assets/icons/mission-icon.svg";
import { ReactComponent as VisionIcon } from "assets/icons/vision-icon.svg";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section3 = () => {
  return (
    <div>
      <div className="lg:block hidden max-w-[1300px] m-auto pt-[6rem]">
        <div className="relative h-[450px]">
          <div className="grid grid-cols-2 h-full">
            <div className="bg-[#97DBA2] text-white px-6 py-16"></div>
            <motion.div
              variants={fadeIn("", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=""
              style={{
                backgroundImage: `url(${Mission})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></motion.div>
          </div>
          <div className="max-w-[1300px] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <div className="pr-[4rem] pl-[4rem]">
              {/* <div className="h-[50px] w-[50px] bg-brand_primary rounded-full"></div> */}
              <MissionIcon />
              <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-redhawk text-[32px] leading-[32px] text-brand_primary my-8"
              >
                Our Mission
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-obviously_r text-[14px] leading-[24px] w-[80%] mb-[4rem] text-brand_primary"
              >
                To bridge the gap between global innovation and local
                execution—by designing and delivering intelligent, uncrewed
                survey systems, and real-time data systems, that solve
                terrain-specific challenges across Africa, leveraging on our
                deep understanding of Africa’s unique environments.
              </motion.p>
            </div>
            <div className="pr-[4rem]"></div>
          </div>
        </div>
        <div className="relative h-[450px]">
          <div className="grid grid-cols-2 h-full">
            <motion.div
              variants={fadeIn("", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=""
              style={{
                backgroundImage: `url(${Vision})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></motion.div>
            <div className="bg-brand_primary text-white px-6 py-16"></div>
          </div>
          <div className="max-w-[1300px] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2 w-full">
            <div className="pr-[4rem]"></div>
            <div className="pl-[4rem]">
              {/* <div className="h-[50px] w-[50px] bg-brand_secondary rounded-full"></div> */}
              <VisionIcon />
              <motion.h1
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-redhawk text-[32px] leading-[32px] text-brand_secondary my-8"
              >
                Our Vision
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-obviously_r text-[14px] leading-[24px] w-[80%] mb-[4rem] text-white"
              >
                To build a future where African innovation powers the world’s
                most advanced survey systems—enabling safer, more efficient, and
                environmentally responsible exploration on land and sea.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block w-[95%] m-auto">
        <div>
          <div
            className="h-[300px]"
            style={{
              backgroundImage: `url(${Mission})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="py-[2rem] w-full bg-[#97DBA2] px-[2rem]">
            <div className="">
              {/* <div className="h-[50px] w-[50px] bg-brand_primary rounded-full"></div> */}
              <MissionIcon />
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-redhawk text-[24px] leading-[32px] text-brand_primary my-8"
              >
                Our Mission
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-obviously_r text-[12px] leading-[24px] w-full mb-[2rem] text-brand_primary"
              >
                To bridge the gap between global innovation and local
                execution—by designing and delivering intelligent, uncrewed
                survey systems, and real-time data systems, that solve
                terrain-specific challenges across Africa, leveraging on our
                deep understanding of Africa’s unique environments.
              </motion.p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="h-[300px]"
            style={{
              backgroundImage: `url(${Vision})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="py-[2rem] w-full bg-brand_primary px-[2rem]">
            <div className="">
              {/* <div className="h-[50px] w-[50px] bg-brand_secondary rounded-full"></div> */}
              <VisionIcon />
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-redhawk text-[24px] leading-[32px] text-brand_secondary my-8"
              >
                Our Vision
              </motion.h1>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-obviously_r text-[12px] leading-[24px] w-full mb-[2rem] text-white"
              >
                To build a future where African innovation powers the world’s
                most advanced survey systems—enabling safer, more efficient, and
                environmentally responsible exploration on land and sea.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
