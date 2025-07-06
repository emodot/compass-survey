import Services1 from "assets/images/services/services-1.webp";
import Services2 from "assets/images/services/services-2.webp";
import Services3 from "assets/images/services/services-3.webp";
import Button from "components/Inputs/Button";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

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
    <div className="pb-[8rem]">
      {services.map((item, index) => (
        <div
          className={`max-w-[1300px] m-auto flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } ${
            index === services.length - 1
              ? ""
              : "border-b border-b-border_stroke_2"
          } justify-between items-center py-[6rem]`}
          key={index}
        >
          <div
            className="basis-[48%] h-[25rem]"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="basis-[48%]">
            <h1 className="font-obviously_r text-[28px] leading-[34px]">
              {item.title}
            </h1>
            <p className="font-obviously_r text-[14px] leading-[24px] text-[#6E6E6E] mb-6 mt-4">
              {item.text}
            </p>
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
