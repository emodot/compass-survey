// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = ({ title, text, image }) => {
  return (
    <div className="">
      <div className="max-w-[1300px] m-auto pt-[13rem] pb-[6rem]">
        <div>
          <h1 className="font-redhawk text-[45px] leading-[52px] w-[60%] mb-6">
            {title}
          </h1>
          <p className="font-obviously_r text-14 leading-[24px] mb-[5rem] w-[70%]">
            {text}
          </p>
          <img
            src={image}
            alt="hydrographic positioning survey"
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
