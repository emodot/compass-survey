// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section1 = ({ title, text, image }) => {
  return (
    <div className="">
      <div className="max-w-[1300px] w-[95%] m-auto pt-[13rem] pb-[96px]">
        <div>
          <h1 className="font-redhawk lg:text-[45px] text-[32px] lg:leading-[52px] leading-[40px] lg:w-[60%] w-full mb-6">
            {title}
          </h1>
          <p className="font-obviously_r lg:text-14 text-[12px] leading-[24px] lg:w-[70%] w-full">
            {text}
          </p>
        </div>
      </div>
      <div
        className="lg:h-[35rem] h-[25rem]"
        style={{
          // height: "100%",
          width: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Section1;
