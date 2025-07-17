import Services1 from "assets/images/services/services-1.webp";
import Services2 from "assets/images/services/services-2.webp";
import Services3 from "assets/images/services/services-3.webp";
import Button from "components/Inputs/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";

const Section2 = () => {
  const services = [
    {
      title: "Hydrographic & Positioning Survey",
      text: "We deliver accurate bathymetric and real-time positioning data, even in the most challenging marine environments. Our USV-powered surveys enhance safety, reduce costs, and provide reliable data for critical offshore operations.",
      image: Services1,
      link: "/services/hydrographic-positioning-survey",
    },
    {
      title: "High Resolution Geophysical Site Survey",
      text: "We map the unseen. Our high-resolution geophysical surveys offer full visibility into seabed and sub-seafloor conditions—supporting safer infrastructure, better design, and smarter decisions.",
      image: Services2,
      link: "/services/high-resolution-geophysical-survey",
    },
    {
      title: "Geotechnical Site Investigation",
      text: "Our geotechnical services offer insight into the strength, structure, and stability of seabed soils, providing critical data on soil composition and strength for the safe design of offshore and coastal structures.",
      image: Services3,
      link: "/services/geotechnical-site-investigations",
    },
  ];
  return (
    <div className="pt-[1rem] pb-[8rem] bg-[#F9F8F3]">
      {services.map((item, index) => (
        <div
          className={`max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } ${
            index === services.length - 1
              ? ""
              : "lg:border-b border-b-border_stroke_2"
          } justify-between items-center lg:py-[6rem] py-[3rem]`}
          key={index}
        >
          <motion.div
            variants={fadeIn("", 0.2 + index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="basis-[48%] lg:h-[25rem] h-[20rem]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></motion.div>
          <div className="basis-[48%] lg:mt-0 mt-5">
            <motion.h1
              variants={fadeIn("up", 0.4 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_r lg:text-[28px] text-[18px] lg:leading-[34px] leading-[28px] w-[85%]"
            >
              {item.title}
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.6 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-obviously_r lg:text-[14px] text-[12px] lg:leading-[24px] leading-[20px] text-[#6E6E6E] mb-6 lg:mt-4 mt-2"
            >
              {item.text}
            </motion.p>
            <Link to={item.link}>
              <Button
                name={"Read More"}
                theme={"transparent"}
                arrowIcon={true}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
