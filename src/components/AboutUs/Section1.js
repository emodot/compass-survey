import Section1BG from "assets/images/about-sec-1-bg.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem] pb-[6rem]">
        <div>
          <h1 className="font-redhawk text-[45px] leading-[52px] w-[60%] mb-6">
            We lead with technology, but we build with understanding.
          </h1>
          <p className="font-obviously_r text-14 leading-[24px] mb-6 w-[50%]">
            We stand at the forefront of Nigeria’s survey industry, pioneering
            the integration of uncrewed survey technologies and innovative
            solutions to deliver unmatched precision and efficiency in oil and
            gas exploration and development.
          </p>
        </div>
      </div>
      <div>
        <img
          src={Section1BG}
          alt="people in a meeting"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default Section1;
