import Section1BG from "assets/images/about-sec-1-bg.webp";
// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = () => {
  return (
    <div className="">
      <div className="max-w-[1300px] w-[95%] m-auto lg:pt-[13rem] pt-[10rem] lg:pb-[6rem] pb-[4rem]">
        <div>
          <h1 className="font-redhawk lg:text-[45px] text-[32px] lg:leading-[52px] leading-[40px] xl:w-[60%] lg:w-[80%] w-full lg:mb-6 mb-4">
            We lead with technology, but we build with understanding.
          </h1>
          <p className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px] mb-6 xl:w-[50%] lg:w-[80%] w-full">
            We stand at the forefront of Nigeria’s survey industry, pioneering
            the integration of uncrewed survey technologies and innovative
            solutions to deliver unmatched precision and efficiency in oil and
            gas exploration and development.
          </p>
        </div>
      </div>
      <div
        className="lg:h-[35rem] h-[25rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${Section1BG})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Section1;
