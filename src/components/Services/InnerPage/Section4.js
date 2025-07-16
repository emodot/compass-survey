// import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";

const Section4 = ({process}) => {

  return (
    <div className="pt-[96px] pb-[3rem] bg-[#F0F0F0]">
      <div className="max-w-[1300px] w-[95%] m-auto lg:flex justify-between">
        <div className="basis-[42%]">
          <h1 className="font-redhawk lg:text-[32px] text-[24px] lg:leading-[42px] leading-[32px] mb-8 text-[#192F36]">
            Our Process
          </h1>
        </div>
        <div className="basis-[52%]">
          <div className="">
            {process.map((item, index) => (
              <div key={index} className="flex gap-[2rem] mb-[4rem]">
                <div className="w-[50px] h-[50px] bg-brand_secondary rounded-[10px] flex items-center justify-center">
                  <h1 className="font-obviously_m lg:text-[18px] text-[16px] leading-[28px] text-[#053333]">
                    {item.num}
                  </h1>
                </div>
                <div className="flex flex-col gap-[1rem] w-[80%] mt-1">
                  <h1 className="font-obviously_r lg:text-[20px] text-[16px] leading-[24px] text-[#192F36]">
                    {item.title}
                  </h1>
                  <p className="font-obviously_r lg:text-[14px] text-[12px] leading-[24px] text-[#192F36]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
