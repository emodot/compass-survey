import Section2BG from "assets/images/home-sec-2-bg.webp";
import Button from "components/Inputs/Button";
import { ReactComponent as ArrowRight } from "assets/icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section2 = () => {
  const navigate = useNavigate();
  const whatWeDo = [
    {
      title: "Hydrographic & Positioning Survey",
      text: "Detailed land mapping for planning and construction.",
      link: "/services/hydrographic-positioning-survey",
    },
    {
      title: "High Resolution Geophysical Site Survey",
      text: "Subsurface imaging for site assessment and safety.",
      link: "/services/high-resolution-geophysical-survey",
    },
    {
      title: "Geotechnical Site Investigation",
      text: "Soil and ground analysis for engineering design.",
      link: "/services/geotechnical-site-investigations",
    },
  ];
  return (
    <div className="lg:py-[8rem] py-[4rem]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:pb-[6rem] pb-[4rem] grid lg:grid-cols-2 grid-cols-1">
        <div>
          <motion.h1
            className="font-obviously_m lg:text-[24px] text-[20px] mb-6 lg:mb-0 leading-[34px]"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>
        </div>
        <div>
          <motion.p
            className="font-obviously_r lg:text-[24px] text-[20px] leading-[32px] mb-6"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            At Compass Survey, we exist to reshape how Africa explores,
            understands, and manages its marine and terrestrial environments
            through innovative, technology-driven survey solutions.
          </motion.p>
        </div>
        <div>
          <motion.p
            className="font-obviously_r text-14 leading-[24px] lg:w-[60%] w-full  mb-6 lg:mb-0"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Our purpose is rooted in a commitment to advancing safety,
            efficiency, and sustainability in geospatial operations—delivering
            data that empowers critical decisions, protects ecosystems, and
            drives national development.
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col justify-end h-full w-full"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button
            name={"Learn More"}
            theme={"secondary"}
            arrowIcon={true}
            onClick={() => navigate("/about-us")}
          />
        </motion.div>
      </div>
      <motion.div
        className="max-w-[1300px] m-auto w-full p-[20px] sm:p-[40px]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${Section2BG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="pt-[5rem] md:pt-[30rem] pb-[5rem] md:pb-0">
          <p className="text-white text-[24px] font-obviously_m mb-6">
            What we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => (
              <motion.div
                className="p-6 bg-white/10 hover:bg-white group cursor-pointer backdrop-blur-sm border border-white/30 transition-all duration-500"
                variants={fadeIn("up", 0 + index * 0.2)}
                initial="hidden"
                whileInView="show"
                onClick={() => navigate(item.link)}
                viewport={{ once: true }}
              >
                <div className="w-[80%]">
                  <p className="text-[18px] font-obviously_m mb-4 text-white group-hover:text-brand_primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-[14px] font-obviously_r mb-6 text-white group-hover:text-brand_primary transition-colors">
                    {item.text}
                  </p>
                  <ArrowRight />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section2;
