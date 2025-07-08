import Section2BG from "assets/images/home-sec-2-bg.webp";
import Button from "components/Inputs/Button";
import ArrowRight from "assets/icons/arrow-right.svg";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section2 = () => {
  const navigate = useNavigate();
  const whatWeDo = [
    {
      title: "Hydrographic & Positioning Survey",
      text: "Detailed land mapping for planning and construction.",
      link: "",
    },
    {
      title: "High Resolution Geophysical Site Survey",
      text: "Subsurface imaging for site assessment and safety.",
      link: "",
    },
    {
      title: "Geotechnical Site Investigation",
      text: "Soil and ground analysis for engineering design.",
      link: "",
    },
  ];
  return (
    <div className="py-[8rem]">
      <div className="max-w-[1300px] m-auto pb-[6rem] grid grid-cols-2">
        <div>
          <h1 className="font-obviously_m text-[24px] leading-[34px]">
            About Us
          </h1>
        </div>
        <div>
          <p className="font-obviously_r text-[24px] leading-[32px] mb-6">
            At Compass Survey, we exist to reshape how Africa explores,
            understands, and manages its marine and terrestrial environments
            through innovative, technology-driven survey solutions.
          </p>
        </div>
        <div>
          <p className="font-obviously_r text-14 leading-[24px] w-[60%]">
            Our purpose is rooted in a commitment to advancing safety,
            efficiency, and sustainability in geospatial operations—delivering
            data that empowers critical decisions, protects ecosystems, and
            drives national development.
          </p>
        </div>
        <div className="flex flex-col justify-end h-full w-full">
          <Button name={"Learn More"} theme={"secondary"} arrowIcon={true} onClick={() => navigate("/projects")} />
        </div>
      </div>
      <div
        className="max-w-[1300px] m-auto w-full p-[40px]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${Section2BG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-[30rem]">
          <p className="text-white text-[24px] font-obviously_m mb-6">
            What we do
          </p>
          <div className="grid grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => (
              <div className="p-6 bg-white">
                <div className="w-[80%]">
                  <p className="text-[18px] font-obviously_m mb-4">
                    {item.title}
                  </p>
                  <p className="text-[14px] font-obviously_r mb-6">
                    {item.text}
                  </p>
                  <img src={ArrowRight} alt="arrow-right" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
