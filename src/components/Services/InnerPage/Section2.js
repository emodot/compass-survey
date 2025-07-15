// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section2 = ({ header1, header2, text1, text2, image }) => {
  return (
    <div className="pt-[96px]">
      <div className="max-w-[1300px] m-auto">
        <h1 className="font-redhawk text-[32px] leading-[14px] mb-8">
          {header1}
        </h1>
        <h1 className="font-redhawk text-[32px] leading-[14px] mb-8">
          {header2}
        </h1>
        <div className="flex justify-between items-center pt-4">
          <div className="basis-[42%]">
            <img
              className="w-full"
              src={image}
              alt="hydrographic positioning survey"
            />
          </div>
          <div className="basis-[48%]">
            <p className="font-obviously_r text-[24px] leading-[32px] mb-[2rem]">
              {text1}
            </p>
            <p className="font-obviously_r text-14 leading-[24px]">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
