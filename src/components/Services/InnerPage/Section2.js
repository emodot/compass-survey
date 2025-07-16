// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section2 = ({ header1, header2, text1, text2, image }) => {
  return (
    <div className="pt-[96px]">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto">
        <h1 className="font-redhawk lg:text-[32px] text-[24px] lg:leading-[14px] leading-[12px] lg:mb-8 mb-4">
          {header1}
        </h1>
        <h1 className="font-redhawk lg:text-[32px] text-[24px] lg:leading-[14px] leading-[12px] mb-8">
          {header2}
        </h1>
        <div className="lg:flex justify-between items-center pt-4">
          <div className="basis-[42%]">
            <img
              className="w-full"
              src={image}
              alt="hydrographic positioning survey"
            />
          </div>
          <div className="basis-[48%]">
            <p className="font-obviously_r lg:text-[24px] text-[16px] lg:leading-[32px] leading-[24px] lg:mb-[2rem] mb-[1rem] lg:mt-0 mt-[1rem]">
              {text1}
            </p>
            <p className="font-obviously_r lg:text-14 text-[12px] lg:leading-[24px] leading-[20px]">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
