import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import OffshoreProjects from "./OffshoreProjects";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-brand_secondary pb-[17rem]">
        <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[6rem] grid lg:grid-cols-2 grid-cols-1">
          <div>
            <motion.p
              className="lg:text-[22px] text-[16px] font-obviously_m leading-[24px] mb-6 text-brand_primary"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Our Projects
            </motion.p>
            <motion.h1 className="font-redhawk text-[45px] leading-[52px] text-brand_primary"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Built on precision. <br />
              Backed by experience.
            </motion.h1>
          </div>
          <div className="lg:block hidden">
            <motion.div
              className="flex flex-col items-end justify-end h-full"
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Button
                name={"Learn More"}
                theme={"primary"}
                arrowIcon={true}
                onClick={() => navigate("/projects")}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-[-18rem]">
        <OffshoreProjects />
      </div>
    </div>
  );
};

export default Section4;
