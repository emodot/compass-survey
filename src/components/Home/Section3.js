import Button from "components/Inputs/Button";
import Section3Image from "assets/images/home-sec-3-ship.webp";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section3 = () => {
  const features = [
    {
      title: "500kg",
      text: "Payload Capacity",
    },
    {
      title: "6kn",
      text: "Maximum Speed",
    },
    {
      title: "4kn",
      text: "Survey Speed",
    },
  ];
  return (
    <div className="bg-[#EEF9F0]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:py-[6rem] py-[4rem] grid md:grid-cols-5 grid-cols-1 items-center">
        <div className="col-span-1 md:col-span-2">
          <motion.h1
            className="font-redhawk md:text-[32px] text-[24px] md:leading-[40px] leading-[32px] text-brand_primary text-center md:text-left"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Meet the future of <br /> Marine Autonomy
          </motion.h1>
          <div className="lg:mt-[8rem] mt-[3rem]">
            <motion.p
              className="font-obviously_r text-16 leading-[24px] mb-2 text-brand_primary text-center md:text-left"
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              The Compass Surveyor
            </motion.p>
            <motion.p
              className="font-redhawk md:text-[45px] text-[32px] md:leading-[52px] leading-[42px] mb-4 text-brand_primary text-center md:text-left"
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Uncrewed Survey Vehicle (USV)
            </motion.p>
            <motion.p
              className="font-obviously_r md:text-14 text-12 leading-[24px] md:w-[80%] w-full text-center md:text-left"
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              The Compass Surveyor USV is designed to handle complex missions
              with ease. Remotely piloted or running autonomously, it integrates
              intelligent software with robust mechanical systems to deliver
              mission reliability at scale.
            </motion.p>
          </div>
          <motion.div
            className="mt-[8rem] hidden md:block"
            variants={fadeIn("right", 1.0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button
              name={"Download Specification"}
              theme={"secondary"}
              arrowIcon={true}
            />
          </motion.div>
        </div>
        <motion.div
          className="col-span-2 my-[4rem] md:my-0"
          variants={fadeIn("", 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img src={Section3Image} alt="section-3" />
        </motion.div>
        <div className="col-span-1 flex flex-col md:justify-end justify-center items-center md:items-end">
          <div>
            {features.map((item, index) => (
              <motion.div
                className="mb-[2rem]"
                variants={fadeIn("left", 0.2 + index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="font-obviously_r text-[44px] text-brand_primary text-center md:text-left">
                  {item.title}
                </p>
                <p className="font-obviously_r md:text-14 text-12 text-center md:text-left">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="pb-[4rem] w-fit m-auto block md:hidden"
        variants={fadeIn("up", 1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Button
          name={"Download Specification"}
          theme={"secondary"}
          arrowIcon={true}
        />
      </motion.div>
    </div>
  );
};

export default Section3;
