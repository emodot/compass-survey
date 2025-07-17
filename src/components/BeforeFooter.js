import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const BeforeFooter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative h-[400px] lg:block hidden">
        <div className="grid grid-cols-2 h-full">
          <div className="bg-brand_primary text-white px-6 py-16"></div>
          <div className="bg-brand_secondary text-white px-6 py-16"></div>
        </div>
        <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto py-[5rem] grid grid-cols-2 absolute top-0 left-1/2 -translate-x-1/2">
          <div className="pr-[4rem]">
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_m text-[22px] leading-[32px] xl:w-[60%] lgm:w-[90%] w-[100%] mb-[4rem] text-white"
            >
              Get a closer look at our cutting-edge survey solutions and
              real-world project impact.
            </motion.p>
            <Button
              name={"See What We Do"}
              theme={"secondary_plus"}
              arrowIcon={true}
              onClick={() => navigate("/services")}
            />
          </div>
          <div className="xl:pl-[6rem] pl-[2rem]">
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_m text-[22px] leading-[32px] xl:w-[60%] lgm:w-[90%] w-[100%] mb-[4rem] text-brand_primary"
            >
              Ready to experience our services in action? Get in Touch with our
              experts today.
            </motion.p>
            <Button
              name={"Contact Us"}
              theme={"white"}
              arrowIcon={true}
              onClick={() => navigate("/contact-us")}
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="px-6 py-16 bg-brand_primary">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-obviously_m text-[22px] leading-[32px] xl:w-[60%] lgm:w-[90%] w-[100%] mb-[4rem] text-white"
          >
            Get a closer look at our cutting-edge survey solutions and
            real-world project impact.
          </motion.p>
          <Button
            name={"See What We Do"}
            theme={"secondary_plus"}
            arrowIcon={true}
            onClick={() => navigate("/services")}
          />
        </div>
        <div className="px-6 py-16 bg-brand_secondary">
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-obviously_m text-[22px] leading-[32px] xl:w-[60%] lgm:w-[90%] w-[100%] mb-[4rem] text-brand_primary"
          >
            Ready to experience our services in action? Get in Touch with our
            experts today.
          </motion.p>
          <Button
            name={"Contact Us"}
            theme={"white"}
            arrowIcon={true}
            onClick={() => navigate("/contact-us")}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
