import Section1BG from "assets/images/services/hydrographic-sec-1-bg.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem] pb-[6rem]">
        <div>
          <h1 className="font-redhawk text-[45px] leading-[52px] w-[60%] mb-6">
            Hydrographic & Positioning Survey
          </h1>
          <p className="font-obviously_r text-14 leading-[24px] mb-[5rem] w-[70%]">
            Delivering accurate bathymetric and real-time positioning data, even
            in the most challenging marine environments. Our USV-powered surveys
            enhance safety, reduce costs, and provide reliable data for critical
            offshore operations.
          </p>
          <img
            src={Section1BG}
            alt="hydrographic positioning survey"
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
